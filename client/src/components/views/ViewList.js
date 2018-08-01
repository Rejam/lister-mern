import React from 'react'
import { fetchCurrentList } from '../../actions/fetchCurrentList'
import { connect } from 'react-redux'

class ViewList extends React.Component {

  componentDidMount() {
    this.props.fetchCurrentList(this.props.match.params.id)
  }

  render() {

    const { list } = this.props
    const RenderList = ({list}) =>
      list.items ?
      <div>
        <h3>{ list.name }</h3>
        {
          list.items.map(i => 
          <div key={i._id}>
          {i.name}
          </div>
          )
        }
      </div> :
      <h3>Loading</h3>

    return(
      <div>
        <RenderList list={list} />
      </div>
    )
  }
}

const mapStateToProps = ({ currentList }) => ({
    list: currentList
  })

export default connect(mapStateToProps, { fetchCurrentList })(ViewList)