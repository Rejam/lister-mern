import { connect } from 'react-redux'
import ViewAllLists from '../components/ViewAllLists'

const mapStateToProps = state => ({
  byId: state.lists.byId,
  allIds: state.lists.allIds
})

const Link = connect(mapStateToProps)(ViewAllLists)

export default Link