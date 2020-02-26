import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <div className="search-box">
      <form id="search">
        {/* <label for="search-input">Search this site</label> */}
        <input
          type="search"
          id="search-input"
          name="search"
          spellcheck="false"
        />
        <input id="submit" value="search" type="submit" />
      </form>
    </div>
  );
};

export default Search;
