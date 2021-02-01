export interface IPost {
  id: string;
  title: string;
  description: string;
  markdown: string;
  updoot: number;
  readTime: number;
  createdAt: string;
  updatedAt: string;
}

export interface IProject {
  id: string;
  name: string;
  description: string;
  imageUri: string;
  link: string;
  createdAt: string;
  updatedAt: string;
}
