import React, { Component } from 'react';
import AdminButtons from './AdminButtons'
import { postTvShowWatchListUpdate } from '../../actions/watchList'
import { connect } from 'react-redux'

export class Admin extends Component {
  updateTvShowToWatched = () => {
    this.props.postTvShowWatchListUpdate(this.props.showId, this.props.currentUser.id)
  }

  removeTvShowFromWathclist = () => {
    console.log('remove')
  }

  render() {
    return (
      <div>
        <AdminButtons updateTvShowToWatched={this.updateTvShowToWatched} removeTvShowFromWathclist={this.removeTvShowFromWathclist} />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, { postTvShowWatchListUpdate })(Admin);
