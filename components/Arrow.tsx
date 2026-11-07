import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

// The Phosphor arrow after a button's or link's label: it moves 3px when its parent (a `group`) is hovered
const Arrow = ({ size = 18 }: { size?: number }) => (
  <ArrowRight
    size={size}
    className="flex-none transition-transform ease-out group-hover:translate-x-[3px] motion-reduce:transition-none"
    aria-hidden="true"
  />
);

export default Arrow;
