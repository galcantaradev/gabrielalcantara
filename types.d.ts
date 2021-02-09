export interface IPostInfo {
  size: 'small' | 'normal';
}

export interface IPost {
  id: string;
  title: string;
  description: string;
  markdown: string;
  readTime: number;
  tags: string[];
  createdAt: string;
}

export interface IProject {
  id: string;
  name: string;
  description: string;
  imageUri: string;
  link: string;
  createdAt: string;
}
