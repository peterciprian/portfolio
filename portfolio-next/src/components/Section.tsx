import type { ReactNode } from "react";

type SectionProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function Section({ eyebrow, title, children }: SectionProps) {
  return (
    <section className="section shell">
      <div className="section-header">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}