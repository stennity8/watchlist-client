import React from 'react';

const TvSearchForm = ({ onChange, handleSubmit, searchTerm }) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="ui form error">
        <div className="ui fluid action input">
          <input
            value={searchTerm} name="search-shows"
            type="text" onChange={onChange}
            autoComplete="off" placeholder="Search TV shows..." />
          <button className="ui button green">
            <i className="search icon"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default TvSearchForm;
