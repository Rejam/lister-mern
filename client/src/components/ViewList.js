import React from 'react'
import PropTypes from "prop-types";

const ViewList = ({name, items}) => 
  !name ?
    <div>Loading</div> :
    <div>
      <h3>{ name }</h3>
      {
        items.map(i => 
          <div key={i._id}>
        {i.name}
        </div>
        )
      }
    </div>

ViewList.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
}
export default ViewList