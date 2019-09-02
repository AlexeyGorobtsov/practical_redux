import { connect } from 'react-redux';
import {Tools} from '../components/Tools.jsx';

import {loadUnitData} from "../actions/toolActions";
const actions = {loadUnitData};
export default connect(null, actions)(Tools);