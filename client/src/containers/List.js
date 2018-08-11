import { connect } from 'react-redux'
import ViewList from '../components/ViewList'
import { deleteList } from '../actions/list_actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps.match.params
  const list = state.lists.byId[id]
  return {
      name: list ? list.name : '',
      items: list ? list.items : [],
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id} = ownProps.match.params
  return {
    deleteList: () => {
      dispatch(deleteList(id))
      .then(()=> ownProps.history.push('/lists'))
    }
  }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ViewList)

export default withRouter(List)