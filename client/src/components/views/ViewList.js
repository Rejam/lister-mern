import React from 'react'
import { fetchCurrentList } from '../../actions'
import { connect } from 'react-redux'

class ViewList extends React.Component {
  
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchCurrentList(id)
  }

  render() {
    const RenderList = ({ list }) =>
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
        <RenderList list={ this.props.list} />
      </div>
    )
  }
  
  static defaultProps = {
      list: {}
    }
  
}


const mapStateToProps = ({ lists }, ownProps) => ({ 
  list: lists.find(list => list._id === ownProps.match.params.id)
})

export default connect(mapStateToProps, { fetchCurrentList })(ViewList)