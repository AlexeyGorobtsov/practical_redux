import React, {Component} from 'react';
import {
    Grid,
    Table,
    Segment,
    Header,
    Form
} from 'semantic-ui-react';

import {MechsList} from "./MechsList.jsx";
import {MechDetails} from "./MechDetails.jsx";

const mechs = [
    {
        id: 1,
        name: 'Warhammer',
        type: 'WHM-6R',
        weight: 70,
    }
];

export class Mechs extends Component {
    state = {
        mechs
    };

    render() {
        const {mechs} = this.state;
        const currentMech = mechs[0] || {};

        return(
            <Segment>
                <Grid>
                    <Grid.Column width={10}>
                        <Header as={'h3'}>
                            Mechs List
                        </Header>
                        <MechsList mechs={mechs}/>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header as={'h3'}>
                            Mech Details
                        </Header>
                        <Segment>
                            <MechDetails mech={currentMech}/>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}