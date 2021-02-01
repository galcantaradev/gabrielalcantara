export interface Post {
  id: string;
  title: string;
  description: string;
  markdown: string;
  updoot: number;
  readTime: number;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  imageUri: string;
  link: string;
  createdAt: string;
  updatedAt: string;
}
