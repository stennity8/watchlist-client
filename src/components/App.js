import React, { Component } from 'react';
import './App.css';
import LoginForm from './Login/LoginForm';
import SignupForm from './Signup/SignupForm';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/currentUser'
import { fetchWatchlistTvShows } from '../actions/watchList'
import { Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import history from '../history'
import Home from './Home'
import WatchList from './Watchlist/WatchList'
import Toolbar from './Toolbar/Toolbar'

export class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
      .then(() => {
        if (this.props.currentUser) {
          this.props.fetchWatchlistTvShows(this.props.currentUser.id)
        }
      }
      )
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <Toolbar />
          <div className="ui container" style={{ marginTop: "76px" }}>
            <div>
              {/* <Navbar /> */}
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={LoginForm} />
                <Route path="/signup" exact component={SignupForm} />
                <Route path="/watchlist" exact component={WatchList} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, { getCurrentUser, fetchWatchlistTvShows })(App);