import React from 'react';

const Entries = ({ data, add, play }) => {

  return (
  	<div>
	    {data.map((entry, key) => 
			  	<div className="entry" id={`${entry.id.videoId} ${key}`}>
			  	  <div>
			  	    <a href={`play/${entry.id.videoId}`} ><img href={`play/${entry.id.videoId}`} src={`${entry.snippet.thumbnails.default.url}`} /></a>
			  	  </div>
			  	  <div>
			  	    <a href={`play/${entry.id.videoId}`} >{entry.snippet.title}</a>
			  	  </div>
			  	  <div>
			  	    <input type="button" onClick={() => add(entry)} value="Add to Playlist"/>
			  	  </div>
				  </div>
			)}
		</div>
  )
}

export default Entries;