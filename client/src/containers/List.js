import { connect } from 'react-redux'
import ViewList from '../components/ViewList'

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps.match.params
  console.log(state.lists.byId[id])
  return {
    list: state.lists.byId[id]
  }
}

const List = connect(mapStateToProps)(ViewList)

export default List