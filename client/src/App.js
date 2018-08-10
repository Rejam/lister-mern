import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import AppRoutes from './components/AppRoutes'
import { fetchLists } from './actions/fetch_actions'
import {connect} from 'react-redux'
  
class App extends Component {
  componentDidMount() {
    this.props.fetchLists()
  }

  render() {
    const {isLoading, error} = this.props
    return (
      <div className="App">
          <Router>
              <div>
                <AppHeader />
                { error.hasError ?
                    <p>{error.msg}</p> :
                    isLoading ?
                      <p>Fetching data</p> :
                      <AppRoutes />
                }
              </div>
          </Router>
        <AppFooter />
      </div>
    );
  }
}

const mapStateToProps = ({isLoading, error}) => ({
  error,
  isLoading
})

export default connect(mapStateToProps, { fetchLists })(App)
