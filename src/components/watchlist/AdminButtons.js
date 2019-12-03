import React from 'react';

const AdminButtons = (props) => {
  return (
    <div>
      <button className="column ui button positive two column row" style={{ marginBottom: "5px" }} onClick={props.updateTvShowToWatched}>
        <i className="check icon"></i>
        Finished Watching
      </button>
      <button className="column ui button secondary two column row" onClick={props.removeTvShowFromWathclist}>
        <i className="eye slash outline icon"></i>
        Remove From WatchList
      </button>
    </div>
  )
}

export default AdminButtons;
