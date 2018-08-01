import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAllLists } from '../../actions/fetchLists'

class ViewAllLists extends React.Component {

  componentDidMount() {
    this.props.fetchAllLists()
  }

  render() {
    const { lists } = this.props
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

const mapStateToProps = ({lists}) => ({lists})

export default connect(mapStateToProps, { fetchAllLists })(ViewAllLists)