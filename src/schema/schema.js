import {ORM} from 'redux-orm';

import {Pilot } from "./Pilot";

const schema = new ORM();
schema.register(Pilot);

export default schema;
