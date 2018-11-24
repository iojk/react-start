import $ from "jquery";
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.scss';
import './Appp.scss';

import AppHeader from './AppHeader';
import BootstrapModal from './component/BootstrapModal/BootstrapModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
library.add(faApple, faCheckSquare, faCoffee);

const Message = props => <div>{props.msg}</div>;

class App extends Component {
  componentDidMount() {    
    $('img').each(function(){
      $(this).on('click',function(){
        $(this).hide();
      });
    });    
  }  
  render() {    
    return (   
      <div className="App">      
        <AppHeader />
        <header className="App-header">
          <div>
            <Message msg="A Generic Hello World Text" />
            <Message msg="Creating Reusable React Components" />
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            <Button variant="contained" color="secondary" data-toggle="modal" data-target="#exampleModal">Secondary</Button>
            <i className="material-icons">face</i>
            <i className="material-icons">person</i>
            <i className="fa fa-folder-open"></i>
            <i className="fas fa-stroopwafel"></i>
            <i className="fab fa-font-awesome"></i>
            <FontAwesomeIcon icon={faCheckSquare} />
            <FontAwesomeIcon icon={faCoffee} />
            <FontAwesomeIcon icon={faApple} />
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
        <BootstrapModal />
      </div>
    );
  }
}

export default App;