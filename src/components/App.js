import React, { Component } from 'react';
import './App.css';

import SampleComponent from './sample-component.jsx';

export default class App extends Component {
    render() {
        return(
            <div className={'App'}>
                <div className={'App-header'}>
                    <h2>Project Mini-Mek</h2>
                </div>
                <SampleComponent/>
            </div>
        )
    }
}