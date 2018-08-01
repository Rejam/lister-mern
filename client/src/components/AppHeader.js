import React from 'react'
import { Link } from 'react-router-dom'

class AppHeader extends React.Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <h1>Lister App</h1>
        <Link to="/">Home</Link>
        <Link to="/lists">All</Link>
      </div>
    )
  }
}

export default AppHeader