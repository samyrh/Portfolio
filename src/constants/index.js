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
  threejs, emsi, bts, est, ministre, login, fruits, consul, img,
  space1, space2, space3, space4, space5, space6, space7, space8, space9, space10, space11,
  pizzer1, pizzer2, pizzer3, pizzer4, pizzer5, pizzer6, pizzer7, pizzer8, pizzer10, pizzer11, pizzer12, pizzer13, pizzer14,
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
      "Designed and developed a secure, intelligent e-Banking platform for advanced VISA card management. Built on a microservices architecture with Java/Spring Boot and Spring Cloud, using Spring Batch for ETL, Kafka for event streaming, Redis for caching, and PostgreSQL pgvector for semantic search. Integrated GPT-4o RAG assistant and NLP models for transaction classification, secured with OAuth2/JWT, and connected to PowerCARD via IBM WebSphere with real-time Kafka flows. Delivered modern, cross-platform web and mobile clients with React.js + Redux and Flutter.",
    tags: [
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "Spring Batch", color: "green-text-gradient" },
      { name: "Kafka", color: "pink-text-gradient" },
      { name: "Redis", color: "blue-text-gradient" },
      { name: "PostgreSQL / pgvector", color: "green-text-gradient" },
      { name: "IBM WebSphere", color: "pink-text-gradient" },
      { name: "PowerCARD", color: "blue-text-gradient" },
      { name: "OAuth2", color: "green-text-gradient" },
      { name: "JWT", color: "pink-text-gradient" },
      { name: "GPT-4o", color: "blue-text-gradient" },
      { name: "RAG", color: "green-text-gradient" },
      { name: "NLP Model for Transaction Classification", color: "pink-text-gradient" },
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Redux", color: "green-text-gradient" },
      { name: "Flutter", color: "pink-text-gradient" },
      { name: "Microservices Architecture", color: "blue-text-gradient" },
      { name: "Real-time Data Exchange with Kafka", color: "green-text-gradient" },
      { name: "CI/CD", color: "pink-text-gradient" },
      { name: "Docker", color: "blue-text-gradient" },
      { name: "Git", color: "green-text-gradient" },
      { name: "GitHub", color: "pink-text-gradient" },
      { name: "Bitbucket", color: "blue-text-gradient" },
      { name: "Hibernate", color: "green-text-gradient" },
      { name: "MVC", color: "pink-text-gradient" },
      { name: "Feign Client", color: "blue-text-gradient" },
      { name: "RESTApi", color: "green-text-gradient" },
      { name: "Swagger", color: "pink-text-gradient" },
    ],
    image: hps, // replace with a real screenshot if available
    source_code_link: "", // leave empty if private
  },
  {
    name: "Vinci-Axians Inventory & AI Chatbot Platform",
    description:
      "Designed and delivered a secure, AI-enhanced web application for inventory and user management at Vinci, featuring role-based access control and seamless integration with an intelligent chatbot powered by LLMs, Retrieval-Augmented Generation (RAG), and Persistent Vector Graph (PVG) stores. Developed and exposed RESTful APIs, implemented robust authentication and authorization with Spring Security and JWT, and ensured scalable performance through a microservices-driven architecture. Tech stack: Spring Boot, Spring Security, Spring AI, JWT, React.js, TypeScript, MySQL.",
    tags: [
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "Spring Security", color: "green-text-gradient" },
      { name: "Spring Data JPA", color: "pink-text-gradient" },
      { name: "Spring MVC", color: "blue-text-gradient" },
      { name: "Spring AI", color: "green-text-gradient" },
      { name: "JWT", color: "pink-text-gradient" },
      { name: "React.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
      { name: "REST APIs", color: "blue-text-gradient" },
      { name: "Ollama (LLM runtime)", color: "green-text-gradient" },
      { name: "RAG (Retrieval-Augmented Generation)", color: "pink-text-gradient" },
      { name: "PVG (Persistent Vector Graph) Stores", color: "blue-text-gradient" },
      { name: "GitHub", color: "green-text-gradient" },
      { name: "Git", color: "pink-text-gradient" },
      { name: "Docker", color: "blue-text-gradient" },
      { name: "RESTApi", color: "green-text-gradient" },
    ],
    image: login, // Use the correct 'login' export for Vinci-Axians project
    source_code_link: "https://github.com/samyrh/Vinci-Axians.git",
  },
  {
    name: "Spacebnb – Intelligent Reservation & Hosting Platform",
    description:
      "Developed a secure, AI-driven reservation platform inspired by Airbnb with real-time host–guest communication. Built on a microservices architecture using Spring Boot, Spring Data JPA, Spring MVC, Spring Security, Spring Batch, secured with OAuth2/JWT. Implemented Kafka for event streaming, API Gateway and Config Server for service management, and PostgreSQL/pgvector for AI-powered search. Integrated an Ollama 3 chatbot with RAG and PVG for user assistance. Delivered a modern React.js + Redux web interface.",
    tags: [
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "Spring Security", color: "green-text-gradient" },
      { name: "Spring Data JPA", color: "pink-text-gradient" },
      { name: "Spring MVC", color: "blue-text-gradient" },
      { name: "Spring Batch", color: "green-text-gradient" },
      { name: "OAuth2", color: "pink-text-gradient" },
      { name: "JWT", color: "blue-text-gradient" },
      { name: "Kafka", color: "green-text-gradient" },
      { name: "API Gateway (Spring Cloud Gateway)", color: "pink-text-gradient" },
      { name: "Spring Cloud Config Server", color: "blue-text-gradient" },
      { name: "PostgreSQL / pgvector", color: "green-text-gradient" },
      { name: "Ollama 3", color: "pink-text-gradient" },
      { name: "RAG (Retrieval-Augmented Generation)", color: "blue-text-gradient" },
      { name: "PVG (Persistent Vector Graph) Stores", color: "green-text-gradient" },
      { name: "React.js", color: "pink-text-gradient" },
      { name: "Redux", color: "blue-text-gradient" },
      { name: "Git", color: "green-text-gradient" },
      { name: "GitHub", color: "pink-text-gradient" },
      { name: "Docker", color: "blue-text-gradient" },
      { name: "RESTApi", color: "green-text-gradient" },
    ],
    images: [space1, space2, space3, space4, space5, space6, space7, space8, space9],
    source_code_link: "https://github.com/samyrh/Air-Space-App.git",
  },
  {
    name: "Pizzer App – Online Food Ordering Platform",
    description:
      "Designed and developed Pizzer, a user-friendly web application for online food ordering with features like menu browsing, order customization, profile management, real-time tracking, and multiple delivery addresses. Built with Spring Boot 3.3.1, secured using Spring Security and JWT, and backed by Hibernate JPA with MySQL. Implemented server-side rendering with Thymeleaf, styled with Bootstrap, and managed builds with Maven for a modular, maintainable architecture. Front end implemented with HTML5, CSS3, JavaScript, and jQuery.",
    tags: [
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "Spring Security", color: "green-text-gradient" },
      { name: "Hibernate ORM & JPA", color: "pink-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "JWT", color: "blue-text-gradient" },
      { name: "Thymeleaf", color: "pink-text-gradient" },
      { name: "Maven", color: "blue-text-gradient" },
      { name: "Bootstrap", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "HTML", color: "blue-text-gradient" },
      { name: "jQuery", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "Git", color: "blue-text-gradient" },
      { name: "GitHub", color: "green-text-gradient" },
      { name: "RESTApi", color: "pink-text-gradient" },
    ],
    images: [pizzer1, pizzer2, pizzer3, pizzer4, pizzer5, pizzer6, pizzer7, pizzer8, pizzer10, pizzer11, pizzer12, pizzer13, pizzer14],
    source_code_link: "https://github.com/samyrh/foodstore.git",
  },
  {
    name: "Fruits Image Classification – Deep Learning Project",
    description:
      "Developed a machine learning model to classify fruit images into multiple categories with high accuracy. Implemented the solution using Python, TensorFlow/Keras, and NumPy/Pandas for preprocessing and model training. Applied data augmentation and normalization techniques to improve model generalization. Built and evaluated CNN architectures (Conv2D, MaxPooling, Dropout, Dense), optimized with Adam and categorical cross-entropy. The dataset was split into training, validation, and test sets for robust evaluation, and results were visualized using Matplotlib/Seaborn.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "TensorFlow / Keras", color: "green-text-gradient" },
      { name: "NumPy / Pandas", color: "pink-text-gradient" },
      { name: "Matplotlib / Seaborn", color: "blue-text-gradient" },
      { name: "Scikit-learn", color: "green-text-gradient" },
      { name: "CNN", color: "pink-text-gradient" },
      { name: "RESTApi", color: "blue-text-gradient" },
    ],
    image: fruits,
    source_code_link: "https://github.com/samyrh/Fruits_Images_Classification",
  },
  {
    name: "AI Chatbot – PDF-based Query Answering",
    description:
      "Developed during my internship at Vinci Energies & Axians, this project delivers an AI chatbot that answers user queries by analyzing and retrieving content from multiple PDF documents using RAG and LLMs. Built with Spring Boot 3.3.1 on Tomcat Server, it exposes REST APIs for document handling and query processing, with PVGStore managing embeddings and models without a traditional database. The front end was built in React.js with Vaadin, while Spring AI and Ollama power intelligent, context-aware responses.",
    tags: [
      { name: "Spring Boot 3.3.1", color: "blue-text-gradient" },
      { name: "Spring Security", color: "green-text-gradient" },
      { name: "Tomcat Server", color: "pink-text-gradient" },
      { name: "Maven", color: "blue-text-gradient" },
      { name: "REST API", color: "green-text-gradient" },
      { name: "React.js", color: "pink-text-gradient" },
      { name: "Vaadin", color: "blue-text-gradient" },
      { name: "Spring AI", color: "green-text-gradient" },
      { name: "Ollama", color: "pink-text-gradient" },
      { name: "RAG (Retrieval-Augmented Generation)", color: "blue-text-gradient" },
      { name: "LLMs (Large Language Models)", color: "green-text-gradient" },
      { name: "PVGStore", color: "pink-text-gradient" },
    ],
    images: [space11, space10],
    source_code_link: "https://github.com/samyrh/Ai-Chatbot-Rag",
  },
  {
    name: "Consul Microservices – Secure Web Application",
    description:
      "Designed and developed a web application using a microservices architecture with Spring Boot for backend services and React.js for the frontend. Implemented JWT authentication with a dedicated security service, integrated Sales-Manager for transaction handling, Product-Service for product data, and a Demo microservice for integration testing.\n\nLeveraged Consul for service discovery and MySQL for data persistence. Authentication and authorization were handled via Spring Security + JWT, ensuring secure communication between services. The frontend, built with React.js, provides a responsive interface, while Consul enables dynamic service registration and discovery.",
    tags: [
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "Spring Security", color: "green-text-gradient" },
      { name: "JWT", color: "pink-text-gradient" },
      { name: "Spring Data JPA", color: "blue-text-gradient" },
      { name: "Hibernate ORM", color: "green-text-gradient" },
      { name: "Spring Cloud Consul", color: "pink-text-gradient" },
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Axios", color: "green-text-gradient" },
      { name: "REST API", color: "pink-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "Maven", color: "blue-text-gradient" },
      { name: "Consul UI", color: "pink-text-gradient" },
      { name: "Microservices Architecture", color: "blue-text-gradient" },
    ],
    image: consul,
    source_code_link: "https://github.com/samyrh/Consul-Microservices-Jwt",
  },
  {
    name: "GraphQL CRUD API with Spring Boot",
    description:
      "Designed and developed a backend application that integrates GraphQL with Spring Boot to provide efficient, flexible, and modern data interactions. The API supports complete CRUD operations (Create, Read, Update, Delete) via GraphQL queries and mutations, while also exposing REST endpoints for compatibility and ease of integration with existing systems.\n\nThe project was built with Java 17 and Spring Boot, leveraging GraphQL Java (Spring Boot Starter) for schema definition, query resolvers, and mutation handling. Spring Data JPA was implemented for seamless database access and persistence, with H2 as the in-memory database for rapid development and testing (easily extensible to MySQL or PostgreSQL for production use). Lombok was used to reduce boilerplate code by generating constructors, getters, and setters, improving maintainability. Maven managed builds and dependencies, ensuring a clean and modular project structure.",
    tags: [
      { name: "Java 17", color: "blue-text-gradient" },
      { name: "Spring Boot", color: "green-text-gradient" },
      { name: "GraphQL Java", color: "pink-text-gradient" },
      { name: "Spring Data JPA", color: "blue-text-gradient" },
      { name: "H2 Database", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "blue-text-gradient" },
      { name: "Lombok", color: "green-text-gradient" },
      { name: "Maven", color: "pink-text-gradient" },
      { name: "REST API", color: "blue-text-gradient" },
      { name: "GraphQL", color: "green-text-gradient" },
    ],
    image: img,
    source_code_link: "https://github.com/samyrh/GraphQL",
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
