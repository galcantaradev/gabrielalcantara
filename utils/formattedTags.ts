export const formattedTags = (tags: string[]): string => {
  return tags
    ?.map((tag, index) => {
      if (index === tags.length - 1) {
        return tag;
      }

      return `${tag}, `;
    })
    ?.join('');
};
