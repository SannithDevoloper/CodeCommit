import {combineReducers} from 'redux';
import films from './moiesReducers';

//declare all the reducers
const rootReducer = combineReducers({
    films
})

export default rootReducer;