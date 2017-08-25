import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';
import Slider from 'react-slick';

function NextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: ''}}
      onClick={onClick}
    ></div>
  );
}

function PrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: ''}}
      onClick={onClick}
    ></div>
  );
}

export default class ImageSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      swipeToSlide: true,
      arrows: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    return (
      <div>
        <Slider {...settings}>
          <div><img src="./img/Banner1.jpg" /></div>
          <div><img src="./img/Banner2.jpg" /></div>
          <div><img src="./img/Banner3.jpg" /></div>
          <div><img src="./img/Banner4.jpg" /></div>
        </Slider>

        <div class="clearfix"></div>
      </div>
    );
  }
}
