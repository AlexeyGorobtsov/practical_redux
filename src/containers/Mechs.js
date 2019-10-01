import {connect} from 'react-redux';

import schema from "../schema";
import {Mechs} from  '../components/Mechs.jsx';

const mapState = state => {
    const session = schema.from(state.entities);
    const {Mech} = session;
    const mechs = Mech.all().toModelArray().map(mechModel => {
        const mech = {
            ...mechModel.ref,
            mechType: {},
        };

        if (mechModel.type) {
            mech.mechType = {...mechModel.type.ref};
        }

        return mech;
    });

    return {mechs};
};

export default connect(mapState)(Mechs);