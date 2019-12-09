import React, { Component } from 'react';

export class TvShowLikes extends Component {
  state = {
    likes: 0
  }

  render() {
    const handleLike = () => {
      this.setState({
        likes: this.state.likes + 1
      })
    }

    return (
      <div className="ui labeled button" tabIndex="0" onClick={handleLike}>
        <div className="ui button">
          <i className="heart icon"></i> Like
        </div>
        <div className="ui basic label" href="#">
          {this.state.likes}
        </div>
      </div>
    );
  }
}

export default TvShowLikes;
