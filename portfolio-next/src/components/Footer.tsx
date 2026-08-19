import { profile } from "@/content/profile";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner shell">
        <p className="footer-note">{profile.name} / portfolio</p>
        <SocialLinks links={profile.socials} />
      </div>
    </footer>
  );
}