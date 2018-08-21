import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import AppRoutes from "./components/AppRoutes";
import { fetchLists } from "./actions/fetch_actions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.fetchLists();
  }

  render() {
    const { isLoading, error } = this.props;
    return (
      <div className="App">
        <Router>
          <div>
            <AppHeader />
            {isLoading ||
              (error.hasError && (
                <div className="container" style={{ margin: "1rem auto" }}>
                  {isLoading ? <p>Loading</p> : null}
                  {error.hasError ? (
                    <div className="notification is-danger">{error.msg}</div>
                  ) : null}
                </div>
              ))}
            <AppRoutes />
          </div>
        </Router>
        <AppFooter />
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, error }) => ({
  error,
  isLoading
});

export default connect(
  mapStateToProps,
  { fetchLists }
)(App);
