import axios from "axios";

export const list_actions = {
  CREATE_LIST_REQUEST: "CREATE_LIST_REQUEST",
  CREATE_LIST_SUCCESS: "CREATE_LIST_SUCCESS",
  CREATE_LIST_FAILURE: "CREATE_LIST_FAILURE",
  DELETE_LIST_REQUEST: "DELETE_LIST_REQUEST",
  DELETE_LIST_SUCCESS: "DELETE_LIST_SUCCESS",
  DELETE_LIST_FAILURE: "DELETE_LIST_FAILURE"
};

// Create list actions
const createListRequest = () => ({
  type: list_actions.CREATE_LIST_REQUEST
});

const createListSuccess = list => ({
  type: list_actions.CREATE_LIST_SUCCESS,
  list
});

const createListFailure = error => ({
  type: list_actions.CREATE_LIST_FAILURE,
  error
});

export const createList = newList => dispatch => {
  dispatch(createListRequest());

  axios
    .post("/lists", newList)
    .then(res => dispatch(createListSuccess(res.data)))
    .catch(err => dispatch(createListFailure("error")));
};

// Delete list action
const deleteListRequest = id => ({
  type: list_actions.DELETE_LIST_REQUEST,
  id
});

const deleteListSuccess = list => ({
  type: list_actions.DELETE_LIST_SUCCESS,
  list
});

const deleteListFailure = message => ({
  type: list_actions.DELETE_LIST_FAILURE,
  message
});

export const deleteList = id => dispatch => {
  dispatch(deleteListRequest(id));

  return axios
    .delete(`/lists/${id}`, id)
    .then(list => dispatch(deleteListSuccess(id)))
    .catch(err => dispatch(deleteListFailure("Unable to delete list")));
};
