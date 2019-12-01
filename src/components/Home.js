import React, { Component } from 'react';
import PopularTvShowList from './tvshow/PopularTvShowList';

export class Home extends Component {
  render() {
    return (
      <div>
        <PopularTvShowList />
      </div>
    );
  }
}

export default Home;

