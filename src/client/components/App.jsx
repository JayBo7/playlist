import React from 'react';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		search: ''
  	}

  	this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearchInput(e) {
    this.setState({
    	search: e.target.value
    })
  }

  render() {
  	return (
  	  <div>
	  	  <h1>Hello from the other side</h1>
  	    <Search search={this.handleSearchInput}/>
  	  </div>
  	)
  }
}

export default App;