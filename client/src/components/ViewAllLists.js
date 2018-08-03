import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ViewAllLists = ({ byId, allIds }) =>
  <div>
    <h2>Show all lists</h2>
    {
      allIds.map( id => 
      <div key={id}>
        <Link 
          to={`/lists/${id}`}>
            {byId[id].name}
        </Link>         
      </div>)
    }
  </div>

ViewAllLists.propTypes = {
  
  byId: PropTypes.objectOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    items: PropTypes.array.isRequired
  }).isRequired)
  .isRequired,
  
  allIds: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default ViewAllLists