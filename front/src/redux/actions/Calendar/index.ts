export const SET_CALENDAR = "Calendar/SET_CALENDAR" as const;

export interface CalendarData {
  date: number;
  day: number;
  isThisMonth: boolean;
  month: number;
  year: number;
}

export const setCalendar = (payload: CalendarData[][]) => {
    return {type : SET_CALENDAR, payload}
};


type CalendarActionType = 
| ReturnType<typeof setCalendar>

export default CalendarActionType;
