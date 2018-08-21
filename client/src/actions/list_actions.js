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

export function createList(name) {
  return function(dispatch) {
    dispatch(createListRequest());

    return fetch("/lists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name })
    })
      .then(res => res.json())
      .then(list => dispatch(createListSuccess(list)))
      .catch(err => dispatch(createListFailure("Unable to create list")));
  };
}

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

export function deleteList(id, history) {
  return function(dispatch) {
    dispatch(deleteListRequest(id));

    return fetch(`/lists/${id}`, {
      method: "DELETE",
      body: id
    })
      .then(res => res.json())
      .then(list => {
        dispatch(deleteListSuccess(list));
        history.push("/lists");
      })
      .catch(err => {
        dispatch(deleteListFailure("Unable to delete list"));
      });
  };
}
