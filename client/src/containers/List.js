import ViewList from "../components/ViewList";
import { connect } from "react-redux";
import { deleteList } from "../actions/list_actions";
import { addItem } from "../actions/item_actions";
import { withRouter } from "react-router-dom";
import { listSelector } from "../reducers/listReducer";

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    list: listSelector(state, id)
  };
};

const List = connect(
  mapStateToProps,
  { deleteList, addItem }
)(withRouter(ViewList));

export default List;
