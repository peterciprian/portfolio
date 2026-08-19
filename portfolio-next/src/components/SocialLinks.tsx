import type { SocialLink } from "@/content/profile";

type SocialLinksProps = {
  links: SocialLink[];
};

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="social-links" aria-label="Social links">
      {links.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
          {link.label}
        </a>
      ))}
    </div>
  );
}