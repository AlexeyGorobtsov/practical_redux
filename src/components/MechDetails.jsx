import React from 'react';
import { Form } from 'semantic-ui-react';

import {getWeightClass } from '../selectors/mechSelectors';

export const MechDetails = ({mech={}}) => {
    const {
        id='',
        name='',
        type='',
        weight=''
    } = mech;
  const weightClass = getWeightClass(weight);

  return (
      <Form size={'large'}>
          <Form.Field name={'id'} width={6}>
              <label>ID</label>
              <input placeholder={'ID'} value={id} />
          </Form.Field>
          <Form.Field name={name} width={16} >
              <label>Name</label>
              <input placeholder={'Name'} value={name} />
          </Form.Field>
          <Form.Field name={'model'} width={6}>
              <label>Model</label>
              <input placeholder={'Model'} value={type}/>
          </Form.Field>
          <Form.Field name={'weight'} width={6} >
              <label>Weight</label>
              <input value={weightClass} />
          </Form.Field>
      </Form>
  )
};