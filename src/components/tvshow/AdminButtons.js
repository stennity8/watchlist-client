import React from 'react';

const AdminButtons = () => {
  const updateTvShowToWatched = () => {
    console.log('watched')
  }

  const removeTvShowFromWathclist = () => {
    console.log('remove')
  }

  return (
    <div>
      <button className="column ui button green two column row" style={{ marginBottom: "5px" }} onClick={updateTvShowToWatched}>
        <i className="check icon"></i>
        Finished Watching
      </button>
      <button className="column ui button secondary two column row" onClick={removeTvShowFromWathclist}>
        <i className="eye slash outline icon"></i>
        Remove From WatchList
      </button>
    </div>
  )
}

export default AdminButtons;
