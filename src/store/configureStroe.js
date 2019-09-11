import {applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk'
import logger from 'redux-logger';

import rootReducer from '../redusers/root-reducer';

export const configureStore = preloadedState => {
    const middlewares = [thunk, logger];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const storeEnhacers = [middlewareEnhancer];
    const  composedEnhancer = composeWithDevTools(...storeEnhacers);
    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    );
    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('../reducers/root-reducer', () => {
                const newRootReducer = require('../redusers/root-reducer').default;
                store.replaceReducer(newRootReducer)
            });
        }
    }

    return store
};