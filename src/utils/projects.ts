import type { ProjectType } from "../../src/types/types";

export const projectsListSpanish: ProjectType[] = [
  {
    about: "App Mobile",
    name: "CoinApp",
    description:
      "App móvil para convertir precios con tasas en tiempo real. Soporta 11 idiomas y cuenta con más de 1.5k descargas.",

    abilities: [
      "Desarrollo Mobile multiplataforma",
      "Consumo de APIs",
      "Soporte multilenguaje (i18n)",
      "Uso de almacenamiento local",
      "Diseño de interfaz",
    ],
    urls: [
      {
        name: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.heinseng.coinappv2",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/coinapp-img.webp",
      },
      {
        type: "video",
        src: "/projects/coinapp-video.mp4",
      },
    ],
    tags: ["expo", "reactnative", "javascript"],
  },
  {
    about: "App Mobile",
    name: "Qr-Manager",
    description:
      "Aplicación móvil multilenguaje para crear, escanear y descargar códigos QR. Incluye un historial para guardar los códigos generados",

    abilities: [
      "Manejo de APIs nativas",
      "Desarrollo multiplataforma",
      "Uso de SQLite para almacenamiento",
      "Diseño de interfaz",
    ],
    urls: [
      {
        name: "github",
        url: "https://github.com/alexvsq/qr-manager2",
      },
      {
        name: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.heinseng.qrmanager",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/qr-img.webp",
      },
      {
        type: "video",
        src: "/projects/qr-video.mp4",
      },
    ],
    tags: ["reactnative", "typescript", "sqlite", "expo"],
  },
  {
    about: "App Mobile",
    name: "Examen de reglas de Tránsito",
    description:
      "Aplicación móvil para estudiar preguntas del examen de tránsito y realizar simulacros.",

    abilities: [
      "Disponible en modo claro y oscuro",
      "Diseño centrado en UI/UX",
      "Rendimiento optimizado",
      "Manejo de APIs nativas",
      "Gestión eficiente de datos locales",
    ],
    urls: [
      {
        name: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.heinseng.drivetest",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/transit-img.webp",
      },
      {
        type: "video",
        src: "/projects/transit-video.mp4",
      },
    ],
    tags: ["reactnative", "expo", "typescript"],
  },
  {
    about: "Web App",
    name: "AI Code Translator",
    description:
      "Aplicación web que traduce código entre 15 lenguajes de programación. Incluye soporte a temas de color y descarga como imagen.",

    abilities: [
      "Uso de inteligencia artificial",
      "Integración con OpenAI y Google Gemini",
      "Consumo y manejo de APIs",
    ],
    urls: [
      {
        name: "github",
        url: "https://github.com/alexvsq/ai-code-translator",
      },
      {
        name: "web",
        url: "https://vocal-fenglisu-4b8c90.netlify.app/",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/aitranslator-img.webp",
      },
    ],
    tags: ["nextjs", "javascript", "tailwind"],
  },
  {
    about: "Web App",
    name: "Todo App - Firebase",
    description:
      "Aplicación web para gestionar tareas con Firebase, con inicio de sesión mediante Google, búsqueda y gestión de estados de tareas.",

    abilities: [
      "Uso de Firebase Database",
      "Operaciones C.R.U.D",
      "Rutas protegidas para seguridad",
      "Firebase Authentication y login con proveedores",
    ],
    urls: [
      {
        name: "github",
        url: "https://github.com/alexvsq/todo-app",
      },
      {
        name: "web",
        url: "https://silly-daifuku-88388f.netlify.app/auth",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/todoapp-img.webp",
      },
    ],
    tags: ["nextjs", "typescript", "firebase", "tailwind"],
  },
  {
    about: "Landing Page",
    name: "Tecmasoft",
    description:
      "Landing page para una empresa de consultoría en sistemas, diseñada para ofrecer una experiencia visual atractiva y responsive.",

    abilities: [
      "Diseño web moderno",
      "Web Responsive",
      "View transitions",
      "Página web estática",
    ],
    urls: [
      {
        name: "github",
        url: "https://github.com/alexvsq/web-tecmasoft.git",
      },
      {
        name: "web",
        url: "https://12es1d1d2xw.netlify.app/",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/tecmasoft-img.webp",
      },
    ],
    tags: ["astro", "react", "tailwind", "javascript"],
  },
  {
    about: "Web App",
    name: "Books",
    description:
      "Aplicación web para organizar y gestionar libros en listas de lectura. Incluye un buscador con filtros por año, género y páginas, además de almacenamiento local.",

    abilities: [
      "Web app responsive",
      "Uso de almacenamiento local",
      "Buscador y Filtrado de datos",
      "Manejo de estados globales",
    ],
    urls: [
      {
        name: "github",
        url: "https://github.com/alexvsq/book-list",
      },
      {
        name: "web",
        url: "https://courageous-duckanoo-60d5e2.netlify.app/",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/books-img.webp",
      },
    ],
    tags: ["react", "javascript", "vite", "tailwind"],
  },
  {
    about: "Landing Page",
    name: "Portafolio Web",
    description:
      "Portafolio personal con animaciones interactivas, diseñado y programado por mí, utilizando Astro.js para un rendimiento optimizado.",

    abilities: [
      "Diseño web atractivo",
      "Multilenguaje (i18n)",
      "Web Responsive",
      "Animaciones interactivas",
      "Rendimiento Optimizado",
    ],
    urls: [
      {
        name: "github",
        url: "https://github.com/alexvsq/me-portfolio",
      },
      {
        name: "web",
        url: "https://spectacular-sable-7fbc9e.netlify.app/",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/portafolio-img.webp",
      },
    ],
    tags: ["astro", "typescript", "tailwind"],
  },
];

export const projectsListEnglish: ProjectType[] = [
  {
    about: "Mobile App",
    name: "CoinApp",
    description:
      "Mobile app for converting prices with real-time rates. Supports 11 languages and has over 1.5k downloads.",

    abilities: [
      "Cross-platform mobile development",
      "API consumption",
      "Multilanguage support (i18n)",
      "Local storage usage",
      "Interface design",
    ],
    urls: [
      {
        name: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.heinseng.coinappv2",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/coinapp-img.webp",
      },
      {
        type: "video",
        src: "/projects/coinapp-video.mp4",
      },
    ],
    tags: ["expo", "reactnative", "javascript"],
  },
  {
    about: "Mobile App",
    name: "Qr-Manager",
    description:
      "Multilanguage mobile application to create, scan, and download QR codes. Includes a history to save generated codes",

    abilities: [
      "Native API handling",
      "Cross-platform development",
      "SQLite storage usage",
      "Interface design",
    ],
    urls: [
      {
        name: "github",
        url: "https://github.com/alexvsq/qr-manager2",
      },
      {
        name: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.heinseng.qrmanager",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/qr-img.webp",
      },
      {
        type: "video",
        src: "/projects/qr-video.mp4",
      },
    ],
    tags: ["reactnative", "typescript", "sqlite", "expo"],
  },
  {
    about: "Mobile App",
    name: "Traffic Rules Exam",
    description:
      "Mobile application for studying traffic exam questions and running practice tests.",

    abilities: [
      "Available in light and dark mode",
      "UI/UX centered design",
      "Optimized performance",
      "Native API handling",
      "Efficient local data management",
    ],
    urls: [
      {
        name: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.heinseng.drivetest",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/transit-img.webp",
      },
      {
        type: "video",
        src: "/projects/transit-video.mp4",
      },
    ],
    tags: ["reactnative", "expo", "typescript"],
  },
  {
    about: "Web App",
    name: "AI Code Translator",
    description:
      "Web application that translates code between 15 programming languages. Includes color theme support and image download.",

    abilities: [
      "Artificial intelligence usage",
      "Integration with OpenAI and Google Gemini",
      "API consumption and handling",
    ],
    urls: [
      {
        name: "github",
        url: "https://github.com/alexvsq/ai-code-translator",
      },
      {
        name: "web",
        url: "https://vocal-fenglisu-4b8c90.netlify.app/",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/aitranslator-img.webp",
      },
    ],
    tags: ["nextjs", "javascript", "tailwind"],
  },
  {
    about: "Web App",
    name: "Todo App - Firebase",
    description:
      "Web application for task management with Firebase, with Google login, search, and task status management.",

    abilities: [
      "Firebase Database usage",
      "C.R.U.D operations",
      "Protected routes for security",
      "Firebase Authentication and login with providers",
    ],
    urls: [
      {
        name: "github",
        url: "https://github.com/alexvsq/todo-app",
      },
      {
        name: "web",
        url: "https://silly-daifuku-88388f.netlify.app/auth",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/todoapp-img.webp",
      },
    ],
    tags: ["nextjs", "typescript", "firebase", "tailwind"],
  },
  {
    about: "Landing Page",
    name: "Tecmasoft",
    description:
      "Landing page for a systems consulting company, designed to offer an attractive and responsive visual experience.",

    abilities: [
      "Modern web design",
      "Responsive web",
      "View transitions",
      "Static web page",
    ],
    urls: [
      {
        name: "github",
        url: "https://github.com/alexvsq/web-tecmasoft.git",
      },
      {
        name: "web",
        url: "https://12es1d1d2xw.netlify.app/",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/tecmasoft-img.webp",
      },
    ],
    tags: ["astro", "react", "tailwind", "javascript"],
  },
  {
    about: "Web App",
    name: "Books",
    description:
      "Web application to organize and manage books in reading lists. Includes a search with filters by year, genre, and pages, plus local storage.",

    abilities: [
      "Responsive web app",
      "Local storage usage",
      "Search and data filtering",
      "Global state management",
    ],
    urls: [
      {
        name: "github",
        url: "https://github.com/alexvsq/book-list",
      },
      {
        name: "web",
        url: "https://courageous-duckanoo-60d5e2.netlify.app/",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/books-img.webp",
      },
    ],
    tags: ["react", "javascript", "vite", "tailwind"],
  },
  {
    about: "Landing Page",
    name: "Web Portfolio",
    description:
      "Personal portfolio with interactive animations, designed and programmed by me, using Astro.js for optimized performance.",

    abilities: [
      "Attractive web design",
      "Multilanguage (i18n)",
      "Responsive web",
      "Interactive animations",
      "Optimized performance",
    ],
    urls: [
      {
        name: "github",
        url: "https://github.com/alexvsq/me-portfolio",
      },
      {
        name: "web",
        url: "https://spectacular-sable-7fbc9e.netlify.app/",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/portafolio-img.webp",
      },
    ],
    tags: ["astro", "typescript", "tailwind"],
  },
];
