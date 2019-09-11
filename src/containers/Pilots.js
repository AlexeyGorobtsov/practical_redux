import { connect } from "react-redux";

import schema from "../schema/index";
import { Pilots } from "../components/Pilots.jsx";

const mapState = state => {
  const session = schema.from(state.entities);
  const {Pilot} = session;
  const pilots = Pilot.all().toRefArray();

  return {pilots};
};

export default connect(mapState)(Pilots);