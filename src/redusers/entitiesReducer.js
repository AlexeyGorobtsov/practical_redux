import {createReducer} from './utils/reducerUtils';

import {DATA_LOADED} from "../actions/toolConstants";
import schema from '../schema/index';

const initialState = schema.getEmptyState();

export function loadData(state, payload) {
    const session = schema.session(state);
    const {Pilot} = session;
    const {pilots} = payload;

    pilots.forEach(pilot => Pilot.parse(pilot));

    return session.state;
}

export default createReducer(initialState, {
    [DATA_LOADED]: loadData,
});