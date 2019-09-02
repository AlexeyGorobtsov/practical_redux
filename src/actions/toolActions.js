import {fetchData} from '../data/mockAPI';
import {DATA_LOADED} from '../actions/toolConstants.js';

export function loadUnitData() {
    return (dispatch, getState) => {
        fetchData()
            .then(data => {
                dispatch({
                    type: DATA_LOADED,
                    payload: data
                })
            })
    }
};