import React from 'react';

const Search = ({ search, submit }) => {
  return (
  	<div className="search-bar">
	    <input className="search" onChange={(event) => search(event)} placeholder="Find a video" type="text"></input>
	    <input onClick={() => submit()} type="button" value="Search"></input>
	  </div>
  )
}


export default Search;