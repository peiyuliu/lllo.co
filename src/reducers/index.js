import { combineReducers } from 'redux';
import AdReducer from './reducer_ads';

const rootReducer = combineReducers({
   ads: AdReducer,
});

export default rootReducer;