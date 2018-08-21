import axios from "axios";

export const item_actions = {
  ADD_ITEM_REQUEST: "ADD_ITEM_REQUEST",
  ADD_ITEM_SUCCESS: "ADD_ITEM_SUCCESS",
  ADD_ITEM_FAILURE: "ADD_ITEM_FAILURE",
  DELETE_ITEM_REQUEST: "DELETE_ITEM_REQUEST",
  DELETE_ITEM_SUCCESS: "DELETE_ITEM_SUCCESS",
  DELETE_ITEM_FAILURE: "DELETE_ITEM_FAILURE"
};

// create item actions
const addItemRequest = () => ({
  type: item_actions.ADD_ITEM_REQUEST
});

const addItemSuccess = (newItem, list_id) => ({
  type: item_actions.ADD_ITEM_SUCCESS,
  newItem,
  list_id
});

const addItemFailure = error => ({
  type: item_actions.ADD_ITEM_FAILURE,
  error
});

export const addItem = (newItem, list_id) => dispatch => {
  console.log(newItem, list_id);
  dispatch(addItemRequest());
  axios
    .post(`/lists/${list_id}`, { name: newItem })
    .then(res => {
      const newItem = res.data;
      dispatch(addItemSuccess(newItem, list_id));
    })
    .catch(err => dispatch(addItemFailure(err.message)));
};

// delete item actions
// const deleteItemRequest = () => {};
// const deleteItemSuccess = () => {};
// const deleteItemFailure = () => {};

// const deleteItem = (item, list) => dispatch => {
//   dispatch(deleteItemRequest());
// };
