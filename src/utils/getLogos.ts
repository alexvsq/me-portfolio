interface LogosList {
  code: string;
  name: string;
  img: string;
}
const logosJson: LogosList[] = [
  {
    code: "astro",
    name: "Astro",
    img: "/logos/astro.png",
  },
  {
    code: "expo",
    name: "Expo",
    img: "/logos/expo.png",
  },
  {
    code: "express",
    name: "Express",
    img: "/logos/express.png",
  },
  {
    code: "figma",
    name: "Figma",
    img: "/logos/figma.png",
  },
  {
    code: "firebase",
    name: "Firebase",
    img: "/logos/firebase.png",
  },
  {
    code: "github",
    name: "GitHub",
    img: "/logos/github.png",
  },
  {
    code: "gmail",
    name: "Gmail",
    img: "/logos/gmail.png",
  },
  {
    code: "illustrator",
    name: "Adobe Illustrator",
    img: "/logos/illustrator.png",
  },
  {
    code: "javascript",
    name: "JavaScript",
    img: "/logos/javascript.png",
  },
  {
    code: "mongodb",
    name: "MongoDB",
    img: "/logos/mongodb.png",
  },
  {
    code: "mysql",
    name: "MySQL",
    img: "/logos/mysql.png",
  },
  {
    code: "nextjs",
    name: "Next.js",
    img: "/logos/nextjs.png",
  },
  {
    code: "nodejs",
    name: "Node.js",
    img: "/logos/nodejs.png",
  },
  {
    code: "photoshop",
    name: "Adobe Photoshop",
    img: "/logos/photoshop.png",
  },
  {
    code: "playstore",
    name: "Google PlayStore",
    img: "/logos/playstore.png",
  },
  {
    code: "postgresql",
    name: "PostgreSQL",
    img: "/logos/postgresql.png",
  },
  {
    code: "react",
    name: "React",
    img: "/logos/react.png",
  },
  {
    code: "reactnative",
    name: "React Native",
    img: "/logos/reactnative.png",
  },
  {
    code: "sqlite",
    name: "SQLite",
    img: "/logos/sqlite.png",
  },
  {
    code: "supabase",
    name: "Supabase",
    img: "/logos/supabase.png",
  },
  {
    code: "tailwind",
    name: "Tailwind CSS",
    img: "/logos/tailwind.png",
  },
  {
    code: "telegram",
    name: "Telegram",
    img: "/logos/telegram.png",
  },
  {
    code: "typescript",
    name: "TypeScript",
    img: "/logos/typescript.png",
  },
  {
    code: "vite",
    name: "Vite",
    img: "/logos/vite.png",
  },
  {
    code: "web",
    name: "Web",
    img: "/logos/web.png",
  },
];

export const getLogo = (code: string): LogosList | null => {
  const logoFind = logosJson.find((logo) => logo.code === code);
  if (logoFind) return logoFind;
  return null;
};
