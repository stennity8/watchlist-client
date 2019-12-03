import React from 'react';

const TvSearchForm = ({ onChange, handleSubmit, searchTerm }) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="ui form error">
        <h3>Search for TV Show:</h3>
        <div className="field">
          <input placeholder="Search titles..." value={searchTerm} name="search-shows" type="text" onChange={onChange} autoComplete="off"></input>
        </div>
        <input type="submit" value="Search" className="ui button primary" />
      </form>
    </div>
  );
}

export default TvSearchForm;
