import React, { Component } from 'react';
import PopularTvShowList from './TvShow/PopularTvShowList';
import SearchTvShowList from './TvShow/SearchTvShowList';
import { connect } from 'react-redux';
import { clearSearchTvShow } from '../actions/tvShows';

export class Home extends Component {
  componentDidMount() {
    this.props.clearSearchTvShow()
  }

  render() {
    return (
      <div>
        <SearchTvShowList />
        <PopularTvShowList />
      </div>
    );
  }
}

export default connect(null, { clearSearchTvShow })(Home);

