import { connect } from 'react-redux'
import ViewAllLists from '../components/ViewAllLists'

const mapStateToProps = state => ({
  lists: state.lists
})

const Link = connect(mapStateToProps)(ViewAllLists)

export default Link