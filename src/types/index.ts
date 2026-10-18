export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  technologies: string[];
  imageUrl: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  imageUrl: string;
  publishedAt: string;
  readingTime: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  category: string;
}
