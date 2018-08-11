import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ViewAllLists = ({ byId, allIds, createList }) => {

  const handleSubmit = e => {
    e.preventDefault()
    const { value } = e.target.elements.list

    if (value.trim().length > 0)
      createList(value)
    e.target.elements.list.value = ""
  }
  return (
    <div>
      <h2>All Lists</h2>
      <form onSubmit={handleSubmit}>
        <input name="list" type="text"/>
        <button type="submit">Create list</button>
      </form>
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
  )
}

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