import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Player from './components/Player.jsx';

document.getElementById('player') ? ReactDOM.render(<Player />, document.getElementById('player')) : ReactDOM.render(<App />, document.getElementById('app'));
