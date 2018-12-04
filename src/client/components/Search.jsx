import React from 'react';

const Search = ({ search, submit }) => {
  return (
  	<div className="search-bar">
	    <input onChange={(event) => search(event)} type="text"></input>
	    <input onClick={() => submit()} type="button" value="Search"></input>
	  </div>
  )
}


export default Search;