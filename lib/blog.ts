import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

import { IPost } from '../types';

const directory = path.join(process.cwd(), 'blog');

export const getPostsIds = () => {
  const fileNames = fs.readdirSync(directory);

  return fileNames.map(name => {
    return {
      params: {
        id: name.replace(/\.md$/, '')
      }
    };
  });
};

export const getPosts = () => {
  const fileNames = fs.readdirSync(directory);
  const posts = fileNames.map(name => {
    const id = name.replace(/\.md$/, '');
    const fullPath = path.join(directory, name);
    const fileContent = fs.readFileSync(fullPath, 'utf8');

    const { data } = matter(fileContent);

    return {
      id,
      ...data
    } as IPost;
  });

  return posts.sort((a, b) => {
    if (a.createdAt < b.createdAt) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getPostData = async (id: string) => {
  const fullPath = path.join(directory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, 'utf8');

  const { content, data } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const markdown = processedContent.toString();

  return {
    id,
    ...data,
    markdown
  } as IPost;
};
