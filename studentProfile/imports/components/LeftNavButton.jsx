import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';
import Slider from 'react-slick';

export default class LeftNavButton extends Component {
  const {className, style, onClick} = props

  render(){
    return (
      <div
      className={className}
      style={{...style, display: 'block', background: 'red'}}
      onClick={onClick}
    ></div>
    );
  }
}
