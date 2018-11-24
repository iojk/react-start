import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.scss';
import './Appp.scss';

class AppHeader extends Component {
  render() {
    return (
      <div className="AppHeader">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            <Button variant="contained" color="secondary" data-toggle="modal" data-target="#exampleModal">Secondary</Button>
          </p>
          <div className="alert alert-danger" role="alert">
            This is a danger alert—check it out!
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default AppHeader;