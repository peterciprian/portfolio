import Link from "next/link";

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
          <span className="brand-mark"></span>
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