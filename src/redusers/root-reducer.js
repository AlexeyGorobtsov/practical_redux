import {combineReducers} from 'redux';

import tabReducer from "./tabReducer";
import unitInfoReducer from './unitInfoReducer';

const rootReducer = combineReducers({
    tabs: tabReducer,
    unitInfo: unitInfoReducer
});

export default rootReducer;