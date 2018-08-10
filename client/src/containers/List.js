// @ts-nocheck
import { connect } from 'react-redux'
import ViewList from '../components/ViewList'

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps.match.params
  const list = state.lists.byId[id]
  return {
      name: list ? list.name : '',
      items: list ? list.items : [],
    }
}

const List = connect(mapStateToProps)(ViewList)

export default List