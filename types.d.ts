export type Locale = 'ptBr' | 'enUs';

export interface ITag {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  markdown: string;
  readTime: number;
  tags: ITag[];
  locale: Locale;
  createdAt: string;
  updatedAt: string;
}

export interface IProject {
  id: string;
  name: string;
  description: string;
  imageUri: string;
  link: string;
  locale: Locale;
  createdAt: string;
  updatedAt: string;
}
