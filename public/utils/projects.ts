import type { ProjectType } from "../../src/types/types";

export const projectsList: ProjectType[] = [
  {
    about: "App Mobile",
    name: "CoinApp",
    description:
      "App que permite convertir precios con tasas en tiempo real. Es multilenguaje, disponible en 11 idiomas y cuanta con más de 1k de descargas.",

    abilities: [
      "Desarrollo Mobile multiplataforma",
      "Consumo de APIs",
      "Multiidiomas ( i18n )",
      "Uso de almacenamiento local",
      "Más de 1.5k descargas",
    ],
    urls: [
      {
        name: "github",
        url: "https://github.com/alexvsq/coin-app-v2",
      },
      {
        name: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.heinseng.coinappv2",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/coinapp-img.png",
      },
      {
        type: "video",
        src: "/projects/coinapp-video.mp4",
      },
    ],
    tags: ["expo", "react-native", "javascript"],
  },
  {
    about: "App Mobile",
    name: "Qr-Manager",
    description:
      "App multilenguaje que crea códigos QR, permite escanearlos, descargarlos como imagen y guardarlos en un historial.",

    abilities: [
      "Manejo de APIs Mobiles Nativas",
      "Desarrollo Mobile multiplataforma",
      "Uso de tablas SQLite",
      "Multiidiomas ( i18n )",
      "Uso de almacenamiento local",
    ],
    urls: [
      {
        name: "github",
        url: "https://github.com/alexvsq/coin-app-v2",
      },
      {
        name: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.heinseng.coinappv2",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/qr-img.png",
      },
      {
        type: "video",
        src: "/projects/qr-video.mp4",
      },
    ],
    tags: ["expo", "react-native", "typescript", "sqlite"],
  },
  {
    about: "Web App",
    name: "AI Code Translator",
    description:
      "Traductor multilenguaje que convierte código entre 15 lenguajes, con temas de color y opción de descargar como imagen.",

    abilities: [
      "Uso de Inteligencia Artificial",
      "Open Ai",
      "Google gemini",
      "APIs",
    ],
    urls: [
      {
        name: "github",
        url: "https://github.com/alexvsq/coin-app-v2",
      },
      {
        name: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.heinseng.coinappv2",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/aitranslator-img.png",
      },
    ],
    tags: ["next-js", "javascript"],
  },
  {
    about: "Web App",
    name: "Todo App - Firebase",
    description:
      "App para gestionar tareas con Firebase. Permite registro e inicio de sesión con Google, búsqueda y estados de tareas.",

    abilities: [
      "Fireabase Database",
      "C.R.U.D",
      "Rutas Protegidas",
      "Firebase Authentication",
      "Iniciar sesion con proveedores",
    ],
    urls: [
      {
        name: "github",
        url: "https://github.com/alexvsq/coin-app-v2",
      },
      {
        name: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.heinseng.coinappv2",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/todoapp-img.png",
      },
    ],
    tags: ["react", "next-js", "javascript", "firebase"],
  },
  {
    about: "Landing Page",
    name: "Matrix Gym",
    description: "Landing page de un gimansio, diseñado para una tarea",

    abilities: ["Diseño Web", "Responsive"],
    urls: [
      {
        name: "github",
        url: "https://github.com/alexvsq/coin-app-v2",
      },
      {
        name: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.heinseng.coinappv2",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/gym-img.png",
      },
    ],
    tags: ["react", "javascript"],
  },
  {
    about: "Web App",
    name: "Books",
    description:
      "App para organizar libros y gestionarlos en listas de lectura. Incluye un buscador filtrado por año, género y páginas, con almacenamiento local para mantener tus libros.",

    abilities: [
      "Web App Responsive",
      "Uso de alamacenamiento local",
      "Buscador y Filtrado de datos",
      "Manejo de estados globales",
    ],
    urls: [
      {
        name: "github",
        url: "https://github.com/alexvsq/coin-app-v2",
      },
      {
        name: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.heinseng.coinappv2",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/books-img.png",
      },
    ],
    tags: ["react", "javascript"],
  },
  {
    about: "Landing Page",
    name: "Matrix Gym",
    description: "Landing page de un gimansio, diseñado para una tarea.",

    abilities: ["Diseño Web", "Responsive"],
    urls: [
      {
        name: "github",
        url: "https://github.com/alexvsq/coin-app-v2",
      },
      {
        name: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.heinseng.coinappv2",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/gym-img.png",
      },
    ],
    tags: ["react", "javascript"],
  },
  {
    about: "Landing Page",
    name: "Portafolio Web",
    description:
      "Portafolio diseñado y programado por mí, con animaciones interactivas y construido usando Astro.js para un rendimiento optimizado.",

    abilities: [
      "Diseño Web",
      "Web Responsive",
      "Animaciones",
      "Rendimiento Optimizado",
    ],
    urls: [
      {
        name: "github",
        url: "https://github.com/alexvsq/coin-app-v2",
      },
      {
        name: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.heinseng.coinappv2",
      },
    ],
    media: [
      {
        type: "img",
        src: "/projects/portafolio-img.png",
      },
    ],
    tags: ["astro", "typescript"],
  },
];
