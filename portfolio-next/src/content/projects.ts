export type Project = {
  title: string;
  summary: string;
  image: string;
  href: string;
  cta: string;
  stack: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Transcend Design Generator",
    summary: "Edison Award-winning design generator platform for early-stage infrastructure planning.",
    image: "/img/tdg.jpg",
    href: "https://dg.transcendh2o.com/",
    cta: "Visit project",
    stack: ["React", "Next.js", "TypeScript", "OpenLayers", "Google Maps API", "Storybook", "Jest", "Material UI", "Styled Components", "TanStack Query", "MongoDB", "C#", ".NET Core"],
    featured: true,
  },
  {
    title: "Code samples",
    summary: "Public repositories and experiments collected on GitHub.",
    image: "/img/codes.jpg",
    href: "https://github.com/peterciprian?tab=repositories",
    cta: "Open GitHub",
    stack: ["Angular", "TypeScript", "JavaScript", "Github Copilot", "Node.js", "NestJS", "RxJS", "MongoDB"],
  },
  {
    title: "Smart City Platform",
    summary: "Spatial smart city platform built for municipal planning and geodata-heavy workflows.",
    image: "/img/monor.png",
    href: "https://lechnerkozpont.hu/cikk/a-telepulesi-terinformatikai-platform-es-telepulesi-kozepulet-kataszter-monoron",
    cta: "Read about it",
    stack: ["Angular", "RxJS", "TypeScript", "JavaScript", "Angular Material", "OpenLayers", "Spring Boot", "PostgreSQL"],
    featured: true,
  },
  {
    title: "Immobees",
    summary: "Flatmate finder application from an earlier personal product experiment.",
    image: "/img/immobees.png",
    href: "https://immobees-98dcd.web.app/",
    cta: "Visit project",
    stack: ["Angular", "Firebase"],
    featured: true,
  },
  {
    title: "StrollBar",
    summary: "Social walking app for discovering local treasures and historical landmarks.",
    image: "/img/strollBar.jpg",
    href: "https://github.com/peterciprian/StrollBar",
    cta: "Open in GitHub",
    stack: ["Angular", "Node.js", "NestJS", "RxJS", "NgRX", "TypeScript", "MongoDB", "PostgreSQL", "Github Copilot"],
  },
  {
    title: "Public data mapping experiments",
    summary: "Experiments with mapping public data using various geospatial technologies.",
    image: "/img/map.jpg",
    href: "https://public-data-map.vercel.app/",
    cta: "Visit project",
    stack: ["React", "Next.js", "TypeScript", "OpenLayers", "Github Copilot"],
  }
];