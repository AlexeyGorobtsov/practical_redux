import React from 'react';
import {render } from 'react-dom';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import todoApp from './redusers';
import App from './components/App';
import './styles.css';

const store = createStore(todoApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);