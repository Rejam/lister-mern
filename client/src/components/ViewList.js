import React from 'react'
import PropTypes from "prop-types";

const ViewList = ({name, items, deleteList}) =>
  <div>
  {
    !name ?
    <p>List not found</p> :    
    <div>
      <h3>{ name }</h3>
      {
        items.map(i => 
          <div key={i._id}>
            {i.name}
          </div>
        )
      }
      <button onClick={deleteList}>Delete List</button>
    </div>
  }
  </div>

ViewList.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
}

ViewList.defaultProps = {
  name: '',
  items: [],
}

export default ViewList