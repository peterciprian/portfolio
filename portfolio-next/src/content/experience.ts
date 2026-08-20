export type ExperienceItem = {
  company: string;
  product: string;
  role: string;
  period: string;
  summary: string;
  stack: string[];
  responsibilities?: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Transcend Water Ltd.",
    product: "Transcend Design Generator",
    role: "Senior Frontend developer",
    period: "2025.05 - 2026.07",
    summary:
      "Owned frontend architecture and led complex development initiatives, including rebuilding the internal admin module, re-architecting the geospatial module, and building a reusable component library and standardized data-handling solutions",
    responsibilities: [
      "Architected and executed the complete overhaul of the internal administration platform including frontend and BFF (Backend-for-Frontend) architecture using Next.js, achieving end-to-end type safety and removing 100% of engineering dependencies for configuration",
      "Fostered engineering excellence by mentoring trainees, conducting purposeful code reviews, and establishing modern coding standards across distributed teams",
      "Introduced a feature-flag-driven architecture within a shared codebase, enabling controlled feature rollouts and seamless client-specific customizations, reducing deployment risks",
      "Engineered an API-driven form engine to dynamically deploy business-critical forms without requiring new frontend builds, cutting operational overhead and enabling rapid feature rollout",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Material UI",
      "Styled Components",
      "Google Maps API",
      "Jest",
      "Azure DevOps",
    ],
  },
  {
    company: "Transcend Water Ltd.",
    product: "Transcend Design Generator",
    role: "Frontend developer",
    period: "2021.04 - 2025.05",
    summary:
      "Developed complex, data-driven web applications with React and TypeScript, contributing to geospatial and dynamic form modules as well as reusable UI components and frontend solutions",
    responsibilities: [
      "Re-architected the geospatial mapping module using OpenLayers and Google Maps API, increasing heavy dataset rendering speed threefold and reducing codebase size by ~25%",
      "Collaborated on maintaining Azure DevOps CI/CD pipelines and Docker configurations, ensuring reliable, containerized deployments across development, staging and production environments",
      "Maintained and extended backend REST APIs in C# .NET environment for high-availability services",
      "Built and scaled an internal npm-based component library integrated with Storybook, establishing unified design system configurations that accelerated feature delivery cross-applications by an estimated 33%",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Material UI",
      "Styled Components",
      "OpenLayers",
      "Leaflet",
      "Context API",
      "C#",
      ".NET Core",
      "Azure DevOps",
    ],
  },
  {
    company: "Lechner Non-profit Ltd.",
    product: "Smart City Platform",
    role: "Frontend developer",
    period: "2019.10 - 2021.04",
    summary:
      "Led frontend delivery for a greenfield spatial-data-based smart city framework built around maps, dashboards, and adaptable municipal workflows.",
    responsibilities: [
        "Developed core operational interfaces for a large-scale Smart City platform within a cross-functional Scrum team",
        "Reduced technical debt in a large legacy Angular codebase, improving maintainability and lowering the cost of future feature development"
    ],
      stack: [
      "Angular",
      "TypeScript",
      "RxJS",
      "OpenLayers",
      "Angular Material",
      "Bootstrap",
      "Spring Boot",
      "PostgreSQL",
    ],
  },
  {
    company: "SuIT Solutions Ltd.",
    product: "National Social Information System",
    role: "Junior developer",
    period: "2019.02 - 2019.08",
    summary:
      "Contributed to a high-availability public-sector information system supporting business-critical social welfare workflows using Java EE (EJB) and Oracle DB, managing schema migrations via Flyway",
    stack: ["Groovy", "Java EE", "JSF", "EJB", "Oracle", "Flyway", "Jenkins"],
  },
  {
    company: "SuIT Solutions Ltd.",
    product: "Sports analytics platform",
    role: "Junior Frontend developer",
    period: "2018.07 - 2019.02",
    summary:
      "Developed high-fidelity UI for a data-intensive sports analytics application",
    stack: [
      "Angular",
      "TypeScript",
      "RxJS",
      "Chart.js",
      "Angular Material",
      "Bootstrap",
      "Java Spring",
      "PostgreSQL",
    ],
  },
  {
    company: "Völgyzugoly Műhely Kft.",
    product: "Urban development plans",
    role: "Project Assistant",
    period: "2016.01 - 2018.01",
    summary:
      "Produced technical drawings and analytical sections for urban development plans using GIS and CAD software, collaborating with external experts and public authorities",
    stack: ["QGIS", "AutoCAD", "MapInfo", "Ms Office"],
  }
];
