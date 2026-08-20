import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export function Header() {
  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <Link className="brand" href="/">
          <Image
            className="brand-mark"
            src={assetPath("/img/camel-shape.svg")}
            alt=""
            width={40}
            height={40}
          />
          <span>Oláh Péter Ciprián</span>
        </Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}