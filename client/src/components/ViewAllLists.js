import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ViewAllLists = ({ byId, allIds, isFetching }) =>
  <div>
    <h2>Show all lists</h2>
    {
      isFetching ?
        <p>Fetching data</p> :
        allIds.map( id => 
        <div key={id}>
          <Link 
            to={`/lists/${id}`}>
              {byId[id].name}
          </Link>         
        </div>
      )
    }
  </div>

ViewAllLists.propTypes = {
  byId: PropTypes.objectOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    items: PropTypes.array.isRequired
  }).isRequired)
  .isRequired,
  allIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFetching: PropTypes.bool.isRequired
}

ViewAllLists.defaultProps = {
  byId: {},
  allIds: [],
  isFetching: false,
}
export default ViewAllLists