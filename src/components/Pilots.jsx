import React, {Component} from 'react';
import {
    Grid,
    Table,
    Segment,
    Header,
    Form,
    Dropdown
} from 'semantic-ui-react';

import {PilotsList} from './PilotsList.jsx';
import {PilotDetails} from "./PilotDetails.jsx";

const pilots = [
    {
        name: 'Natasha Kerensky',
        rank: 'Captain',
        age: 52,
        gunnery: 2,
        piloting: 3,
        mechType: 'WHM-6R'
    }
];

export class Pilots extends Component {

    render() {
        const { pilots = [] } = this.props;
        const currentPilot = pilots[0] || {};

        return (
            <Segment>
                <Grid>
                    <Grid.Column width={10}>
                        <Header as={'h3'}>Pilot List</Header>
                        <PilotsList pilots={pilots}/>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header as={'h3'}>Pilot Details</Header>
                        <Segment>
                            <PilotDetails pilot={currentPilot}/>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}