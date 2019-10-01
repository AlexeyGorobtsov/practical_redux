import React, {Component} from 'react';
import {
    Grid,
    Segment,
    Header,
} from 'semantic-ui-react';

import {MechsList} from "./MechsList.jsx";
import {MechDetails} from "./MechDetails.jsx";

export class Mechs extends Component {

    render() {

        const {mechs = []} = this.props;
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