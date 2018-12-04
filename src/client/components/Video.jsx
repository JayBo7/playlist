import React from 'react';

const Video = ({ playlist, current, next, prev }) => {
  return (
  	<div>
	  	<div className="video-container">
	    {playlist.length > 0 ? 
				(<iframe className="video" allowFullScreen frameBorder="0" src={`https://www.youtube.com/embed/${playlist[current].id.videoId}`}></iframe>) : (<p>loading...</p>)
		  }
		  </div>
	    <div className="video-control" >
		    <input type="button" value="Previous" onClick={() => prev()}/>
		    <input type="button" value="Next" onClick={() => next()}/>
	    </div>
	  </div>
	)
}

export default Video;
