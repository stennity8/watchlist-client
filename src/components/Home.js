import React, { Component } from 'react';
import PopularTvShowList from './tvshow/PopularTvShowList';
import SearchTvShowList from './tvshow/SearchTvShowList';

export class Home extends Component {
  render() {
    return (
      <div>
        <SearchTvShowList />
        <PopularTvShowList />
      </div>
    );
  }
}

export default Home;

