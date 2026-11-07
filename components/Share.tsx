"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Check, FacebookLogo, LinkedinLogo, LinkSimple, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { siteUrl } from "@/constants";

const square =
  "grid size-11 place-items-center border border-stone-50/25 text-stone-50 transition-colors hover:border-green-500 hover:bg-green-500 hover:text-charcoal";

// Share this page: plain share links (no third-party scripts) and a copy-link button
const Share = () => {
  const path = usePathname();
  const url = `${siteUrl}${path === "/" ? "/" : path}`;
  const u = encodeURIComponent(url);
  const [copied, setCopied] = useState(false);

  const targets = [
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${u}`, Icon: FacebookLogo },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`, Icon: LinkedinLogo },
    { label: "WhatsApp", href: `https://wa.me/?text=${u}`, Icon: WhatsappLogo },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* no clipboard: nothing to do */
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-2 text-small text-stone-300">Podelite stranicu</span>
      {targets.map(({ label, href, Icon }) => (
        <a key={label} className={square} href={href} target="_blank" rel="noopener noreferrer">
          <Icon size={20} aria-hidden="true" />
          <span className="sr-only">Podelite na mreži {label}</span>
        </a>
      ))}
      <button className={square} type="button" onClick={copy} aria-label={copied ? "Link je kopiran" : "Kopirajte link stranice"}>
        {copied ? <Check size={20} aria-hidden="true" /> : <LinkSimple size={20} aria-hidden="true" />}
      </button>
    </div>
  );
};

export default Share;
