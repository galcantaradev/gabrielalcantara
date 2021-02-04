export const toPaths = <T = any>(arr: T[], key: string) => {
  return arr.map(item => {
    return {
      params: {
        [key]: item[key]
      }
    };
  });
};
