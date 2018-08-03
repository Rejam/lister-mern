import React from 'react'

const ViewList = ({list}) => 
  !list ?
    <div>Loading</div> :
    <div>
      <h3>{ list.name }</h3>
      {
        list.items.map(i => 
          <div key={i._id}>
        {i.name}
        </div>
        )
      }
    </div>

export default ViewList