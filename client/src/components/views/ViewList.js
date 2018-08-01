import React from 'react'
import { fetchAList } from '../../services/listAPI'

class ViewList extends React.Component {
  state = { list: {
    items: [],
    name: ""
  } }

  componentDidMount() {
    this.fetchList()
  }

  fetchList = () => {
    fetchAList(this.props.match.params.id)
      .then(list => this.setState({ list }))
  }

  render() {

    const { list } = this.state
    return(
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
    )
  }
}

export default ViewList