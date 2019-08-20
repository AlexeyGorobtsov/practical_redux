import React, {Component} from 'react';
import {Table} from 'semantic-ui-react';

import {PilotsListHeader } from "./PilotListHeader";
import {PilotsListRow} from "./PilotsListRow";

export class PilotsList extends Component {
    render() {
        const { pilots, onPilotClicked, currentPilot} = this.props;
        const pilotRows = pilots.map(pilot => (
            <PilotsListRow
                pilot={pilot}
                key={pilot.name}
                onPilotClicked={onPilotClicked}
                selected={pilot.id === currentPilot}
            />
        ));

        return (
            <Table celled>
                <PilotsListHeader/>
                <Table.Body>
                    {pilotRows}
                </Table.Body>
            </Table>
        )
    }
}