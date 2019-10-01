import {ORM} from 'redux-orm';

import {Pilot } from "./Pilot";
import {Mech} from "./Mech";
import {MechDesign} from "./MechDesign";

const schema = new ORM();
schema.register(Pilot, Mech, MechDesign);

export default schema;
