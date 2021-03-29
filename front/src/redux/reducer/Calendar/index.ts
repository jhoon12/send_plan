import CalendarActionType, {CalendarData, SET_CALENDAR} from '../../actions/Calendar';

export interface InitialInterface{
    setData : CalendarData[][],
}

const initialState : InitialInterface = {
   setData : []
}

const CalendarState = (state : InitialInterface = initialState, action : CalendarActionType)=>{
    switch(action.type){
        case SET_CALENDAR:
            return{
                ...state,
                setData : action.payload
            }
        default:
            return state
    }
}
export default CalendarState