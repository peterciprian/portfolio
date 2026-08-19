export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
    {
    title: "FRONTEND & FRAMEWORKS",
    items: ["React", "Angular", "Next.js", "TypeScript", "JavaScript (ES6+)", "React Native"],
    },
  {
    title: "STATE & API",
    items: ["TanStack Query (React Query)", "RxJS", "REST APIs", "Axios", "Context API", "Redux toolkit"],
  },
  {
    title: "ARCHITECTURE",
    items: ["API-driven development", "Modular design", "Scalable UI systems", "SSR/SSG/CSR"],
  },
  {
    title: "DESIGN SYSTEM",
    items: ["Material UI", "Figma", "Styled Components", "CSS modules", "Bootstrap", "Tailwind", "SCSS"],
  },
  {
    title: "DATA VISUALIZATION",
    items: ["Google Maps API", "OpenLayers", "Leaflet", "React-Flow", "Chart.js"],
  },
  {
    title: "BACKEND & DATABASE",
    items: ["Node.js", "Nest.js", "C#", ".NET Core", "Java EE & Spring Boot", "MongoDB", "PostgreSQL", "Oracle DB", "Flyway", "Maven"],
  },
  {
    title: "TOOLS & INFRASTRUCTURE",
    items: ["Jest", "Storybook", "Node.js", "MongoDB", "PostgreSQL", "Git", "Webpack", "Vite", "npm", "Azure DevOps", "nginx", "GitHub Actions", "GitHub Pages", "GitHub Copilot"],
  },
];