import React, { Component } from 'react';
import AdminButtons from './AdminButtons'

export class Admin extends Component {
  updateTvShowToWatched = () => {
    console.log('watched')
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

export default Admin;
