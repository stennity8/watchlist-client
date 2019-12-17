import React, { Component } from 'react';
import './App.css';
// import LoginForm from './Login/LoginForm';
import LoginReduxForm from './Login/LoginReduxForm'
// import SignupForm from './Signup/SignupForm';
import SignupReduxForm from './Signup/SignupReduxForm'
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/currentUser'
import { fetchWatchlistTvShows } from '../actions/watchList'
import { fetchWatchedTvShows } from '../actions/watched'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'
import Home from './Home'
import WatchList from './Watchlist/WatchList'
import Watched from './Watchlist/Watched'
import Toolbar from './Toolbar/Toolbar'
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import ScrollToTop from '../components/ScrollButtons/ScrollToTop'
import ScrollToBottom from '../components/ScrollButtons/ScrollToBottom'

export class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  // Uncomment for deployment
  // wakeHeroku = async () => {
  //   const response = await fetch('https://watchlist-backend-api.herokuapp.com/api/v1/')
  // }

  componentDidMount() {
    //Wake Heroku on load - Uncomment for deployment
    // this.wakeHeroku()

    this.props.getCurrentUser()
      .then(() => {
        if (this.props.currentUser) {
          this.props.fetchWatchlistTvShows(this.props.currentUser.id)
          this.props.fetchWatchedTvShows(this.props.currentUser.id)
        }
      })
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  };

  render() {
    let backdrop

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop onClick={this.backdropClickHandler} />
    }
    return (
      <div style={{ height: "100%" }} className="site-content">
        <Router history={history}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} linkClickHandler={this.backdropClickHandler} closeClickHandler={this.backdropClickHandler} />
          {backdrop}
          <ScrollToTop />
          <ScrollToBottom />
          <div className="ui container" style={{ marginTop: "76px" }}>
            <div>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={LoginReduxForm} />
                <Route path="/signup" exact component={SignupReduxForm} />
                <Route path="/watchlist" exact component={WatchList} />
                <Route path="/watched" exact component={Watched} />
              </Switch>
            </div>
          </div>
        </Router>
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, { getCurrentUser, fetchWatchlistTvShows, fetchWatchedTvShows })(App);