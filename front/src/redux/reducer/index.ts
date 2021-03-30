import {combineReducers} from 'redux';
import CalendarState from './Calendar';
import ModalState from './Modal'
const rootReducer = combineReducers({
    CalendarState,   
    ModalState
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;