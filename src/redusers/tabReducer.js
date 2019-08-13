import {createReducer} from './utils/reducerUtils';

import {TabBarContainer} from "../components/TabBarContainer";
import {TAB_SELECTED} from "../actions/tabActions";

const initialState = {
    currentTab: 'unitInfo'
};

export function selectTab(state, payload) {
    return {
        currentTab: payload.tabName,
    }
}

export default createReducer(initialState, {
    [TAB_SELECTED]: selectTab
})