import { connect } from "react-redux";
import ViewAllLists from "../components/ViewAllLists";
import { createList, deleteList } from "../actions/list_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => ({
  byId: state.lists.byId,
  allIds: state.lists.allIds
});

const Lists = connect(
  mapStateToProps,
  { createList, deleteList }
)(withRouter(ViewAllLists));

export default Lists;
