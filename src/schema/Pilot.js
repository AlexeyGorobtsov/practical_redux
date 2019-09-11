import {Model} from 'redux-orm';

export class Pilot extends Model {
    static parse(pilotData) {

        return this.create(pilotData)
    }
}

Pilot.modelName = 'Pilot';