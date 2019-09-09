import {createReducer} from "./utils/reducerUtils";
import {DATA_LOADED } from "../actions/toolConstants";

const initialState = {
    name: 'N/A',
    affiliation: ''
};

const dataLoaded = (state, payload) => {
    const {unit} = payload;
    return unit;
};

export default createReducer(initialState, {
    [DATA_LOADED]: dataLoaded,
})