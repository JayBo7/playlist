import React from 'react';
import Search from './Search.jsx';
import Entries from './Entries.jsx';
import $ from 'jQuery';

class App extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		search: 'puppy',
  		data: [],
  		playlist: []
  	}

  	this.handleSearchInput = this.handleSearchInput.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
  	this.handleAdd = this.handleAdd.bind(this);
  	this.handlePlayVideo = this.handlePlayVideo.bind(this);
  }

  componentDidMount() {
  	this.handleSubmit();
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
  }

  handlePlayVideo(url) {

  	$.ajax({
    	url: `play/${url}`,
    	method: 'GET',
    	success: () => {},
    	error: (err) => console.error(err)
    })
  }

  render() {
    const { data } = this.state;

  	return (
  	  <div>
	  	  <h1>Make a Playlist</h1>
  	    <Search search={this.handleSearchInput} submit={this.handleSubmit} />
  	    <Entries data={data} add={this.handleAdd} play={this.handlePlayVideo}/>
  	  </div>
  	)
  }
}

export default App;