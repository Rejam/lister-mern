import { connect } from 'react-redux'
import ViewList from '../components/ViewList'

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps.match.params
  const list = state.lists.byId[id] || {name:"", items:[]}
  return {
    name: list.name,
    items: list.items
  }
}

const List = connect(mapStateToProps)(ViewList)

export default List