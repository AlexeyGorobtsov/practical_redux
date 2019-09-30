import {connect} from "react-redux";

import schema from "../schema/index";
import {Pilots} from "../components/Pilots.jsx";

const mapState = state => {
    const session = schema.from(state.entities);
    const {Pilot} = session;
    const pilots = Pilot.all().toModelArray().map(pilotModel => {
        const pilot = {
            ...pilotModel.ref
        };
        const {mech} = pilotModel;

        if (mech && mech.type) {
            pilot.mechType = mech.type.id;
        }

        return pilot;
    });

    return {pilots};
};

export default connect(mapState)(Pilots);