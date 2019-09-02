import React, {Component} from 'react';
import {
    Segment,
    Button
} from "semantic-ui-react";

export class Tools extends Component {
    render() {
        const {loadUnitData} = this.props;

        return(
            <Segment attached={'bottom'}>
                <Button onClick={loadUnitData}>Reload Unit Data</Button>
            </Segment>
        )
    }
}