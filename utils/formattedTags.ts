import { ITag } from '../types';

export const formattedTags = (tags: ITag[]): string => {
  return tags
    ?.map((tag, index) => {
      if (index === tags.length - 1) {
        return tag.slug;
      }

      return `${tag.slug} • `;
    })
    ?.join('');
};
