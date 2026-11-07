import Image from "next/image";
import type { Photo as PhotoData } from "@/constants";

type Props = {
  photo: PhotoData;
  sizes: string;
  className?: string;
  priority?: boolean;
  quality?: number;
};

// The gallery's folders carry spaces and Serbian letters; the image optimiser only finds the file
// when the path reaches it already percent-encoded
export const encodeSrc = (src: string) => encodeURI(src);

// A client photograph filling its frame (the frame sets the size and ratio, and is `relative`)
const Photo = ({ photo, sizes, className = "", priority, quality = 80 }: Props) => (
  <Image
    src={encodeSrc(photo.src)}
    alt={photo.alt}
    fill
    sizes={sizes}
    priority={priority}
    quality={quality}
    className={`object-cover ${className}`}
    style={photo.pos ? { objectPosition: photo.pos } : undefined}
    data-source="client"
    data-subject={photo.alt}
  />
);

// A linked photograph zooms 1.03 inside its frame when its link (a `group`) is hovered
export const zoom = "transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none";

export default Photo;
