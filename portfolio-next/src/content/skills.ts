export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "ARCHITECTURE & ENGINEERING",
    items: ["End-to-end feature development", "API-driven architecture", "Component libraries & Design systems", "Performance optimization", "State management", "Large-scale refactoring", "Modular design", "Scalable UI systems", "SSR/SSG/CSR"],
  },
  {
    title: "AI-ASSISTED DEVELOPMENT",
    items: ["GitHub Copilot", "ChatGPT", "AI-assisted development", "Agentic development workflows", "AI-generated code review and architecture planning"],
  },
    {
    title: "FRONTEND",
    items: ["React", "Angular", "Next.js", "TypeScript", "JavaScript (ES6+)", "React Native"],
    },
  {
    title: "BACKEND & DATABASE",
    items: ["Node.js", "Nest.js", "Express.js", "C#", ".NET", "Java EE & Spring Boot", "MongoDB", "PostgreSQL", "Oracle DB", "Flyway", "Maven"],
  },
  {
    title: "DATA VISUALIZATION",
    items: ["Google Maps API", "OpenLayers", "Leaflet", "React-Flow", "Chart.js"],
  },
  {
    title: "STATE & API",
    items: ["TanStack Query (React Query)", "RxJS", "NgRx", "REST APIs", "Axios", "Context API", "Redux toolkit"],
  },
  {
    title: "TOOLS & INFRASTRUCTURE",
    items: ["Jest", "Storybook", "Figma", "Material UI", "npm", "Webpack", "Vite", "Docker", "Azure DevOps", "GitHub Actions", "GitHub Pages", "nginx", "Git"],
  },
];