export interface WindowCalanderDate {
  year: number;
  month: number;
  date: number;
  isActive: boolean;
}

export type WindowCalanderLine = WindowCalanderDate[];
export type WindowCalander = WindowCalanderLine[];

function getWindowCalander(
  settingYear: number,
  settingMonth: number
): WindowCalander {
  const dateObj = new Date();

  const getYear = (): number => dateObj.getFullYear();
  const getMonth = (): number => dateObj.getMonth() + 1;
  const getDate = (): number => dateObj.getDate();
  const getDay = (): number => dateObj.getDay();

  const setDate = (date: number): void => {
    dateObj.setDate(date);//날짜 설정
  };
  const nextDate = (): void => {
    dateObj.setDate(getDate() + 1);//다음날
  };
  const prevDate = (): void => {
    dateObj.setDate(getDate() - 1);// 전날
  };

  dateObj.setMonth(settingMonth - 1);//매개값으로 받은 달
  dateObj.setFullYear(settingYear);//연도
  setDate(1);//1일로 설정

  const dayIndex: number = getDay();//현재 날짜
  for (let i = 0; i < dayIndex; i++) {
    prevDate();//현재 날짜 전까지 날 --
  }

  const calanderLineArr: WindowCalander = [];
  for (let i = 0; i < 6; i++) {
    const dateArr: WindowCalanderLine = [];
    for (let j = 0; j < 7; j++) {
      const year: number = getYear();
      const month: number = getMonth();
      const nowDate: number = getDate();
      const dayIndex: number = getDay();
      dateArr.push({
        year,
        month,
        date: nowDate,
        isActive: month === settingMonth//매개값 개월
      });
      nextDate();//다음 날 
    }
    calanderLineArr.push(dateArr);
  }

  return calanderLineArr;
}

export default getWindowCalander;
