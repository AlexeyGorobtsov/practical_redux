import { Model } from 'redux-orm';

export class MechDesign extends Model {
    static parse(designData) {

        return this.create(designData);
    }
}

MechDesign.modelName = 'MechDesign';