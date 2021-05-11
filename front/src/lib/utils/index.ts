export const addZeroFunc = (
  year: number,
  month: number,
  date: number
): string => {
  return `${year}${month < 10 ? `0${month}` : month}${
    date < 10 ? `0${date}` : date
  }`;
};
