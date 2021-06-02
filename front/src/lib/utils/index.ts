interface SpliceDateInterface {
  year: string;
  month: string;
  date: string;
}

export const addZeroFunc = (
  year: number,
  month: number,
  date: number
): string => {
  return `${year}${month < 10 ? `0${month}` : month}${
    date < 10 ? `0${date}` : date
  }`;
};
export const spliceDateString = (date: string): string => {
  let spliceDate: SpliceDateInterface = {
    year: "",
    month: "",
    date: ""
  };
  spliceDate.year = date.substring(0, 4);
  spliceDate.month = date.substring(4, 6);
  spliceDate.date = date.substring(6, 8);
  return `${spliceDate.year}-${spliceDate.month}-${spliceDate.date}`;
};
export const CheckEmail = (email: string): boolean => {
  const reg_email: RegExp = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if (!reg_email.test(email)) return false;
  else return true;
};
export const getImgSrc = (img : string): string =>{
  return `http://10.156.145.168:8000/uploads/${img}`
}