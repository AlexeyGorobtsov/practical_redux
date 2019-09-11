import {combineReducers} from 'redux';

import tabReducer from "./tabReducer";
import unitInfoReducer from './unitInfoReducer';
import entitiesReducer from './entitiesReducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    tabs: tabReducer,
    unitInfo: unitInfoReducer
});

export default rootReducer;