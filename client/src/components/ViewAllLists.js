import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllLists = props => {
  const { lists: { byId, allIds} } = props
  return (
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
  )
}

export default ViewAllLists