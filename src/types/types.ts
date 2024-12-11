export interface ProjectType {
  about: string;
  name: string;
  description: string;
  abilities: string[];
  urls: {
    name: string;
    url: string;
  }[];
  media: {
    type: "img" | "video";
    src: string;
  }[];
  tags: string[];
}
