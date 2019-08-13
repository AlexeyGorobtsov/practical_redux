export function createReducer(initialState, fnMap) {
    return (state = initialState, {type, payload}) => {
        const handler = fnMap[type];

        return handler ? handler(state, payload) : state;
    }
}

export function reduceReducers(...reducers) {
    return (previous, current) => {
        reducers.reduce(
            (p, r) => r(p, current),
            previous
        )
    }
}

export function createConditionalSliceReducer(sliceName, fnMap) {
    const sliceReducer = createReducer({}, fnMap);

    return (state, action) => {
        if (fnMap[action.type]) {
            return {
                ...state,
                [sliceName]: sliceReducer(state[sliceName], action),
            }
        }

        return state;
    }
}