import React, {Component} from 'react';

import {Table} from 'semantic-ui-react';
import {MechsListHeader} from "./MechListHeader.jsx";
import {MechListRow} from "./MechListRow.jsx";

export class MechsList extends Component {
    render() {
        const {mechs = []} = this.props;
        const mechRows = mechs.map(mech => (
            <MechListRow mech={mech} key={mech.id}/>
        ));

        return (
            <Table celled>
                <MechsListHeader/>
                <Table.Body>
                    {mechRows}
                </Table.Body>
            </Table>
        )
    }
}



