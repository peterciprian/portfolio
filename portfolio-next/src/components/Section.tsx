"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  const [copied, setCopied] = useState(false);
  const sectionId = id ?? eyebrow.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  async function copySectionPath() {
    const sectionUrl = new URL(window.location.href);
    sectionUrl.hash = sectionId;

    try {
      await navigator.clipboard.writeText(sectionUrl.toString());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="section shell" id={sectionId}>
      <div className="section-header">
        <button
          className="eyebrow eyebrow-button"
          type="button"
          onClick={copySectionPath}
          title={copied ? "Section path copied" : "Copy section path"}
          aria-label={copied ? "Section path copied" : `Copy path to ${eyebrow} section`}
        >
          <span>{eyebrow}</span>
          <svg className="copy-icon" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="9" y="9" width="10" height="10" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M15 9V6.5A1.5 1.5 0 0 0 13.5 5h-7A1.5 1.5 0 0 0 5 6.5v7A1.5 1.5 0 0 0 6.5 15H9" fill="none" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        </button>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}
