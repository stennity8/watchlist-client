import React from 'react';

const TvSearchForm = ({ handleChange, handleSubmit, searchTerm }) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="ui form error">
        <h3>Log In</h3>
        <div className="field">
          <label>Search for TV Show:</label>
          <input placeholder="Search titles..." value={searchTerm} name="search-shows" type="text" onChange={handleChange} autoComplete="off"></input>
        </div>
        <input type="submit" value="Search" className="ui button primary" />
      </form>
    </div>
  );
}

export default TvSearchForm;
