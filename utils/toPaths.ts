export const toPaths = <T = any>(arr: T[] = [], key: string = 'id') => {
  return arr.map(item => {
    return {
      params: {
        id: item[key]
      }
    };
  });
};
