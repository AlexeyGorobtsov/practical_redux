import {connect} from 'react-redux';

import {UnitInfo} from "../components/UnitInfo.jsx";
import { selectUnitInfo} from "../selectors/unitInfoSelectors";

const mapState = state => {

   return {unitInfo: selectUnitInfo(state)}
};

export default connect(mapState)(UnitInfo)