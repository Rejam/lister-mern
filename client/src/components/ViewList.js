import React from "react";
import PropTypes from "prop-types";

const ViewList = props => {
  const { list, addItem, deleteList, history } = props;
  const { id } = props.match.params;

  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.newitem;
    addItem(value, id);
  };
  return (
    <div>
      {!list ? (
        <p>List not found</p>
      ) : (
        <div>
          <h3>{list.name}</h3>
          <form action="" onSubmit={handleSubmit}>
            <input type="text" name="newitem" placeholder="New item" />
            <button type="submit">Add item</button>
          </form>
          {list.items.map(i => (
            <div key={i._id}>{i.name}</div>
          ))}
          <button onClick={() => deleteList(id, history)}>Delete List</button>
        </div>
      )}
    </div>
  );
};

ViewList.propTypes = {
  addItem: PropTypes.func.isRequired,
  list: PropTypes.object
};

export default ViewList;
