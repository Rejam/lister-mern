import React from 'react'
import { fetchLists } from '../../services/listAPI'
import { Link } from 'react-router-dom'

class ViewAllLists extends React.Component {

  state = { lists: [] }

  componentDidMount() {
    this.fetchLists()
  }

  fetchLists = () => {
    fetchLists()
      .then(lists => this.setState({ lists }))
      .catch(err => console.log(err))
  }
  render() {
    const { lists } = this.state
    return (
      <div>
        <h2>Show all lists</h2>
        {
          lists.map( list => 
          <div key={list._id}>
            <Link 
              to={`/lists/${list._id}`}>
                {list.name}
            </Link>         
          </div>)
        }
      </div>
    )
  }
}

export default ViewAllLists