import React from 'react';
import {
    Form,
    Dropdown,
    Segment
} from "semantic-ui-react";

const FACTIONS = [
    {value: 'lc', text: 'Lyran Commonwealth'},
    {value: 'wd', text: `Wolf's Dragoons`},
];

export const UnitInfo = () => {
    return (
        <Segment attached={'bottom'}>
            <Form size={'large'}>
                <Form.Field name={'name'} width={6}>
                    <label>Unit name</label>
                    <input type="text" placeholder={'Name'} value={'Black Widow Company'}/>
                </Form.Field>
                <Form.Field name={'affiliation'} width={6}>
                    <label>Affiliation</label>
                    <Dropdown
                        selection
                        options={FACTIONS}
                        value={'wd'}
                    />
                </Form.Field>
            </Form>
        </Segment>
    )
};