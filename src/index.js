import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';

import {App} from './components/App';
import './styles.css';
import {configureStore} from './store/configureStroe'

const store = configureStore();
const rootEl = document.getElementById('root');
let render = () => {
    const App = require('./components/App').default;
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        rootEl
    )
};

if (module.hot) {
    module.hot.accept('./components/App.js', () => setTimeout(render))
}

render();