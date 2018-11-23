import React, { Component } from 'react';
import $ from "../node_modules/jquery/dist/jquery";
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.scss';
import './Appp.scss';

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
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;