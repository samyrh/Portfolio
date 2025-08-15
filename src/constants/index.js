import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  hps,
  vinci,
  ocp,
  upm,
  archi,
  carrent,
  jobit,
  tripguide,
  threejs, emsi, bts, est, ministre,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Spring Boot Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Front End Web & Mobile Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Software Engineer - Final Year Internship",
    company_name: "HPS — Casablanca",
    icon: hps,
    iconBg: "#E6DEDD",
    date: "Mar 2025 – Present",
    points: [
      "Led the design and implementation of an intelligent, secure e-Banking platform for advanced VISA card management on a microservices stack with Spring Boot and Spring Cloud (Config, Gateway, OpenFeign), plus Spring Batch for scheduled/ETL workloads.",
      "Built event-driven services with Kafka, high-throughput caching via Redis, and semantic search using PostgreSQL pgvector.",
      "Delivered secured REST (and selectively GraphQL) APIs with OAuth2/JWT, integrated HPS PowerCARD via IBM WebSphere for real-time card and transaction operations.",
      "Added in-app intelligence: GPT-4o-powered assistant using Spring AI with RAG for contextual help, developed an NLP pipeline for transaction classification.",
      "Engineered resilience and observability: Resilience4j circuit breakers, retries/timeouts, bulkheads, centralized logs/metrics and health checks.",
      "Shipped web (React.js + Redux) and mobile (Flutter) clients; collaborated in Figma to prototype flows and ensure accessible, modern UX (OTP-protected CVV reveal, limits/controls, travel plans, notifications).",
      "Established CI/CD pipelines (GitHub/Bitbucket + Jenkins).",
    ],
  },
  {
    title: "Full Stack Software Engineer - Internship",
    company_name: "Vinci Energies | Axians — Casablanca",
    icon: vinci,
    iconBg: "#E6DEDD",
    date: "Jul 2024 – Sep 2024",
    points: [
      "Designed and developed a web application for inventory and user management with role-based access control (RBAC), covering item lifecycle (create/update/track), user provisioning, and permissions.",
      "Built secure REST APIs with Spring Boot (Spring Security, JWT) and documented them with Swagger/OpenAPI, validated endpoints using Postman and Insomnia.",
      "Integrated an in-app AI chatbot using LLMs with RAG and PVG stores to provide contextual assistance (search, usage tips, policy answers) directly inside the tool.",
      "Implemented clean data modeling and persistence with MySQL, input validation, and error handling, optimized common UI flows (search, filters, pagination) in React.js + TypeScript for a responsive UX.",
      "Collaborated on UI/UX flows in Figma to align components and interactions with stakeholder needs.",
    ],
  },
  {
    title: "IT Support Technician",
    company_name: "ARCHIRODON Phosphate Port — Laâyoune",
    icon: archi,
    iconBg: "#383E56",
    date: "Sep 2022 – Oct 2023",
    points: [
      "Provided day-to-day IT support to staff, handling incidents/requests and ensuring smooth operations.",
      "Assisted with user accounts, basic network troubleshooting, and workstation/device setup, maintained light inventory and documentation.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "ALSASEL SARL — Laâyoune",
    icon: shopify,
    iconBg: "#383E56",
    date: "01/07/2022 - 01/09/2022",
    points: [
      "Designed and developed a responsive web application for managing steel materials stock: modern UI with HTML5, CSS3, Bootstrap, dynamic interactions in JavaScript, and a Laravel back end exposing REST/JSON endpoints.",
      "Built the MySQL schema, implemented Eloquent ORM CRUD workflows, server-side validation, pagination, and search.",
    ],
  },
  {
    title: "Orientation Internship",
    company_name: "PHOSBOUCRAA (OIB/H/D/G) — Groupe OCP S.A — Laâyoune",
    icon: ocp,
    iconBg: "#E6DEDD",
    date: "Jul 2019 – Aug 2019",
    points: [
      "Designed and implemented an employee management desktop application in VB.NET, using ADO.NET (connected mode) against Microsoft SQL Server for real-time CRUD, validation, search/filter, and basic reporting.",
      "Modeled the SQL Server schema (tables, relations, indexes), wrote parameterized queries/T-SQL stored procedures, and enforced data integrity.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Intelligent e-Banking Platform — Web & Mobile (HPS)",
    description:
        "Design and development of a secure, intelligent e-Banking platform for advanced VISA card management. Microservices in Java/Spring Boot & Spring Cloud, Spring Batch (ETL), Kafka (event streaming), Redis (caching), and PostgreSQL pgvector (semantic search). GPT-4o RAG assistant, OAuth2/JWT security, NLP for transaction classification, and PowerCARD integration via IBM WebSphere with real-time Kafka flows. Web (React + Redux) and mobile (Flutter) clients.",
    tags: [
      { name: "java",          color: "blue-text-gradient" },
      { name: "springboot",    color: "green-text-gradient" },
      { name: "microservices", color: "pink-text-gradient" },
      { name: "kafka",         color: "blue-text-gradient" },
      { name: "redis",         color: "green-text-gradient" },
      { name: "postgresql",    color: "pink-text-gradient" },
      { name: "RAG",           color: "blue-text-gradient" },
      { name: "oauth2_jwt",    color: "green-text-gradient" },
      { name: "react",         color: "pink-text-gradient" },
      { name: "flutter",       color: "blue-text-gradient" },
    ],
    image: hps,               // replace with a real screenshot if available
    source_code_link: "",     // leave empty if private
  },
];

// ---------------------------
// NEW: Education timeline data
// ---------------------------
const educations = [
  {
    degree: "Engineering Degree – Computer Science & Networks (MIAGE specialization)",
    school: "Moroccan School of Engineering Sciences (EMSI)",
    city: "Casablanca",
    icon: emsi,
    iconBg: "#E6DEDD",
    date: "2023 – 2025",
    points: [
      "MIAGE specialization: integration of computer science, enterprise information systems, and business management methodologies to align IT solutions with organizational strategy.",
      "Advanced software engineering with Java and Spring Boot, applying microservices architecture, API design (REST/GraphQL), and secure integration patterns (OAuth2/JWT).",
      "Enterprise system design: requirements engineering, BPMN/UML modeling, database architecture, and ERP/CRM integration for digital transformation initiatives.",
      "Development of decision-support and data-driven solutions using BI dashboards, KPIs, and analytics to optimize business processes and managerial decision-making.",
      "Adoption of professional practices: Agile/Scrum delivery, DevOps pipelines, and quality assurance to ensure scalable, maintainable, and resilient applications."
    ],
  },
  {
    degree: "Professional Bachelor’s Degree – Computer Engineering",
    school: "Private University of Marrakech (UPM)",
    city: "Marrakech",
    icon: upm, // replace with UPM logo
    iconBg: "#FFFFFF",
    date: "2021 – 2022",
    points: [
      "Full-stack development, systems design, and applied software engineering projects.",
    ],
  },
  {
    degree: "Advanced Technician Diploma (BTS) – Information Systems Development (DSI)",
    school: "Brevet de Technicien Supérieur (BTS)",
    city: "Laâyoune",
    icon: bts, // replace with EST logo
    iconBg: "#E6DEDD",
    date: "2018 – 2020",
    points: [
      "Focused on software design and implementation, database management, and web application development.",
    ],
  },
  {
    degree: "1st Year – Biological Engineering",
    school: "Higher School of Technology (EST)",
    city: "Laâyoune",
    icon: est, // replace with EST logo
    iconBg: "#E6DEDD",
    date: "2017 – 2018",
    points: [
      "Scientific fundamentals: mathematics, physics/chemistry, and laboratory methodology.",
    ],
  },
  {
    degree: "Scientific Baccalaureate – Physics & Chemistry",
    school: "Med V High School",
    city: "Laâyoune",
    icon: ministre, // replace with lycée/academy logo
    iconBg: "#E6DEDD",
    date: "2016 – 2017",
    points: [],
  },
];

export { services, technologies, educations, experiences, testimonials, projects };
