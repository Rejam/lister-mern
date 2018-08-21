import { connect } from "react-redux";
import ViewAllLists from "../components/ViewAllLists";
import { createList } from "../actions/list_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => ({
  byId: state.lists.byId,
  allIds: state.lists.allIds
});

const Lists = connect(
  mapStateToProps,
  { createList }
)(withRouter(ViewAllLists));

export default Lists;
