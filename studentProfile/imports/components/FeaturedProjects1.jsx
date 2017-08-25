import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

export default class Slideshow extends Component{

  render() {
    var project1 = './img/Project1.jpg';

    return (
      <div id="wrap">
  <div id="header">
              <h1 className="mainHeader">Featured Student Projects</h1>
              <div className="w3-container">
          {/*}<h2>Mobile First Responsiveness</h2>
                  <p className="w3-large">Try to resize the window!</p>*/}
      </div>
              <div className="w3-row w3-border">
          <div className="w3-quarter w3-container">
                      <p><img src={ project1 } alt="poster" className="image" /></p>
                      <p className="projHead">Underneath</p>
                      <p>A short description here</p>
                      <p className="viewProj">
                  <button>View Project</button>
              </p>
                  </div>
          <div className="w3-quarter w3-container">
                      <p><img src={ project1 } alt="poster" className="image" /></p>
                      <p className="projHead">Underneath</p>
                      <p>A short description here</p>
                  </div>
          <div className="w3-quarter w3-container">
                      <p><img src={ project1 } alt="poster" className="image" /></p>
                      <p className="projHead">Underneath</p>
                      <p>A short description here</p>
                  </div>
          <div className="w3-quarter w3-container">
                      <p><img src={ project1 } alt="poster" className="image" /></p>
                      <p className="projHead">Underneath</p>
                      <p>A short description here</p>
                  </div>
      </div>

              {/*This is to ensure that the div height covers all content*/}
              <div className="clearfix"></div>
              <p className="mainLink"><a href="#">View all projects >></a></p>
          </div>
</div>
    );
  }
}
