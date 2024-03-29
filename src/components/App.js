import React, {Component} from "react";
import {Header, Container, Menu} from "semantic-ui-react";
import "semantic-ui-css/semantic.css";

import TabBarContainer from "../containers/TabBarContainer.js";
import UnitInfo from "../containers/UnitInfo";
import Pilots from "../containers/Pilots.js";
import Mechs from "../containers/Mechs.js";
import {UnitOrganization} from "./UnitOrganization.jsx";
import Tools from "../containers/Tools";
import "./App.css";

export default class App extends Component {

    render() {
        const tabs = [
            {name: "unitInfo", label: "Unit Info", component: UnitInfo},
            {name: "pilots", label: "Pilots", component: Pilots},
            {name: "mechs", label: "Mechs", component: Mechs},
            {
                name: "unitOrganization",
                label: "Unit Organization",
                component: UnitOrganization
            },
            {name: "tools", label: "Tools", component: Tools}
        ];

        return (
            <div className={"App"}>
                <div className={"App-header"}>
                    <Header inverted as="h1">
                        Project Mini-Mek
                    </Header>
                </div>
                <Container>
                    <TabBarContainer tabs={tabs} size={"massive"}/>
                </Container>
            </div>
        );
    }
}
