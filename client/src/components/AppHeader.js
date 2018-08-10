import React from 'react'
import { Link } from 'react-router-dom'

const AppHeader = () =>
  <div>
    <h1>Lister App</h1>
    <Link to="/">Home</Link>
    <Link to="/lists">All</Link>
  </div>

export default AppHeader