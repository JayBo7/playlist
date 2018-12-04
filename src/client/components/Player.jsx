import React from 'react';
import Search from './Search.jsx';
import Entries from './Entries.jsx';
import Video from './Video.jsx';
import $ from 'jQuery';

class Player extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		search: 'dog',
  		data: [],
  		playlist: [],
      current: 0
  	}

  	this.handleSearchInput = this.handleSearchInput.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
  	this.handleAdd = this.handleAdd.bind(this);
  	this.handlePlayVideo = this.handlePlayVideo.bind(this);
    this.handleNextVideo = this.handleNextVideo.bind(this);
    this.handlePrevVideo = this.handlePrevVideo.bind(this);
  }

  componentDidMount() {
  	const cachedHits = sessionStorage.getItem('playlist');
  	
  	if (cachedHits) {
  		this.setState({
  			playlist: JSON.parse(cachedHits)
  		})
  	}
  }

  handleSearchInput(e) {
    this.setState({
    	search: e.target.value
    })
  }

  handleSubmit() {
    const { search, playlist } = this.state;

    $.ajax({
    	url: `api/video/${search}`,
    	method: 'GET',
    	success: (data) => {
    		this.setState({
    			data: data.items
    		})
    	},
    	error: (err) => console.error(err)
    })
  }

  handleAdd(entry) {
    const { playlist } = this.state;

  	if (!playlist.includes(entry)) {
  		playlist.push(entry);
	    this.setState({
	    	playlist: playlist,
	    })
	  }
	  sessionStorage.setItem('playlist', JSON.stringify(playlist));
  }

  handlePlayVideo(url) {
  	$.ajax({
    	url: `play/${url}`,
    	method: 'GET',
    	success: () => {},
    	error: (err) => console.error(err)
    })
  }

  handleCreatePlaylist() {
    const { playlist } = this.state;

    $.ajax({
    	url: 'api/playlist/',
    	method: 'POST',
    	data: { 
    		playlist: playlist, 
    	},
    	success: () => console.log('posted'),
    	error: (err) => console.error(err)
    })
  }

  handleNextVideo() {
    const { current, playlist } = this.state

    if (current < playlist.length - 1) {
      this.setState(prevState => ({
        current: prevState.current + 1
      }));
    }
  }

  handlePrevVideo() {
    const { current, playlist } = this.state

    if (current > 0) {
      this.setState(prevState => ({
        current: prevState.current - 1
      }));
    }
  }

  render() {
    const { data, playlist, current } = this.state;

  	return (
  	  <div>
        <Search search={this.handleSearchInput} submit={this.handleSubmit} />
        <Video playlist={playlist} current={current} next={this.handleNextVideo} prev={this.handlePrevVideo} />
  	    <Entries data={data} add={this.handleAdd} play={this.handlePlayVideo}/>
  	  </div>
  	)
  }
}

export default Player;