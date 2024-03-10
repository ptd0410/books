export const cvAntdCol = (arr: string[]) => {
  return arr.map((item) => ({
    title: toCap(item.replace("-", " ")),
    key: item,
    dataIndex: item,
  }));
};

export const toCap = (str: string) => {
  return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
};
