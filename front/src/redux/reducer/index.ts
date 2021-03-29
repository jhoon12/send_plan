import {combineReducers} from 'redux';
import CalendarState from './Calendar';
const rootReducer = combineReducers({
    CalendarState,   
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;