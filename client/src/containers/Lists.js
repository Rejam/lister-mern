import { connect } from 'react-redux'
import ViewAllLists from '../components/ViewAllLists'
import { createList } from '../actions/list_actions'

const mapStateToProps = state => ({
  byId: state.lists.byId,
  allIds: state.lists.allIds
})

const Link = connect(mapStateToProps, { createList })(ViewAllLists)

export default Link