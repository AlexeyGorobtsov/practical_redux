import React, {Component} from 'react';
import {
    Header,
    Container,
    Menu,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';

import {TabBarContainer} from "./TabBarContainer.jsx";
import { UnitInfo } from "./UnitInfo.jsx";
import { Pilots } from "./Pilots.jsx";
import './App.css';

const Mechs = () => <div>Mechs content</div>;
const UnitOrganization = () => <div>Unit Organization content</div>;

export default class App extends Component {
    render() {
        const tabs = [
            {name: 'unitInfo', label: 'Unit Info', component: UnitInfo},
            {name: 'pilots', label: 'Pilots', component: Pilots},
            {name: 'mechs', label: 'Mechs', component: Mechs},
            {name: 'unitOrganization', label: 'Unit Organization', component: UnitOrganization}
        ];

        return (
            <div className={'App'}>
                <div className={'App-header'}>
                    <Header inverted as='h1'>Project Mini-Mek</Header>
                </div>
                <Container>
                    <TabBarContainer tabs={tabs} size={'massive'}/>
                </Container>
            </div>
        )
    }
}