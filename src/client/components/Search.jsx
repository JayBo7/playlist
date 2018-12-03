import React from 'react';

const Search = ({search}) => {
  return (
    <input onChange={(event) => search(event)} type="text"></input>
  )
}


export default Search;