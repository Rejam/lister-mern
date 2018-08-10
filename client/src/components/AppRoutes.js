import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Lists from '../containers/Lists'
import List from '../containers/List'

const AppRoutes = props =>
  <Switch>
    <Route 
      path='/lists/:id' 
      component={List} />
    <Route 
      path='/lists' 
      component={Lists} />
    <Route 
      path='/' 
      component={Home} />
  </Switch>

export default AppRoutes