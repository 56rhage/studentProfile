import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImageCarousel from './image-carousel';

export default class Slideshow extends Component{

    render() {
        const images = ['./img/Banner1.jpg', './img/Banner2.jpg', './img/Banner3.jpg'];

        return (
            <ImageCarousel
                onClickItem={() => {}}
                onClickThumb={() => {}}
                onChange={() => {}}
                images={images}
                autoPlay={true}
            />
                /*var settings = {
                  dots: true,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1
                };
                return (
                  <Slider {...settings}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>6</h3></div>
                  </Slider>*/
		/*<div>
            <div className="rslides_container">
                <ul className="rslides" id="slider2">
                    <li><img src="./img/Banner1.jpg" alt="" /></li>
                    <li><img src="./img/Banner2.jpg" alt="" /></li>
                    <li><img src="./img/Banner3.jpg" alt="" /></li>
                </ul>
            </div>*/

            /*This is to ensure that the div height covers all content*/
            /*<div className="clearfix"></div>
        </div>*/
    );
  }
}

/*render(<App />, document.getElementById('app'));*/
