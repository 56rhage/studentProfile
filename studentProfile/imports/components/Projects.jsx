import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

import Swiper from 'react-id-swiper';

export default class Projects extends Component{
  render() {
      const params = {
          pagination: '.swiper-pagination',
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          allowSwipeToPrev: true,
          allowSwipeToNext: true,
          loop: true,
          autoplay: '2000',
          coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          }
        }

        var imageStyle = {
            width: '100%',
        };

        var centerImage = {
            display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }

    return (
      <div id="wrap">
          <div id="header">
              <h1 className="mainHeader">Featured Projectss</h1>

              <Swiper {...params}>
                  <div className="wrapper">
                      <div className="card radius"> {/*shadowDepth1*/}
                          <div className="card__image border-tlr-radius" style={ centerImage }>
                              <img src="./img/Project1.jpg" alt="image" style={ imageStyle } />
                          </div>

                          <div className="card__content card__padding">
                              <article className="card__article">
                                  <h2><a href="#">Underneath</a></h2>

                                  <p>This is an outstanding project which worth your time to look through.</p>
                              </article>
                          </div>
                      </div>
                  </div>

                  <div className="wrapper">
                      <div className="card radius shadowDepth1">
                          <div className="card__image border-tlr-radius" style={ centerImage }>
                              <img src="./img/Project1.jpg" alt="image" style={ imageStyle } />
                          </div>

                          <div className="card__content card__padding">
                              <article className="card__article">
                                  <h2><a href="#">Firerule</a></h2>

                                  <p>Making sure that the fire will get hotter and hotter for this project</p>
                              </article>
                          </div>
                      </div>
                  </div>

                  <div className="wrapper">
                      <div className="card radius shadowDepth1">
                          <div className="card__image border-tlr-radius" style={ centerImage }>
                              <img src="./img/Project1.jpg" alt="image" style={ imageStyle } />
                          </div>

                          <div className="card__content card__padding">
                              <article className="card__article">
                                  <h2><a href="#">Blow Wind Blow</a></h2>

                                  <p>It is my first attempt to be develop a new eCommerce website. Those who work in the call center line is shitty because of their actions and the attitude.</p>
                              </article>
                          </div>
                      </div>
                  </div>

                  <div className="wrapper">
                      <div className="card radius shadowDepth1">
                          <div className="card__image border-tlr-radius" style={ centerImage }>
                              <img src="./img/Project1.jpg" alt="image" style={ imageStyle } />
                          </div>

                          <div className="card__content card__padding">
                              <article className="card__article">
                                  <h2><a href="#">Rock The Boat</a></h2>

                                  <p>I am a big fan of coding and this project allows students to create an application on their own.</p>
                              </article>
                          </div>
                      </div>
                  </div>
              </Swiper>

              {/*This is to ensure that the div height covers all content*/}
              <div className="clearfix"></div>
              <p className="mainLink"><a href="#">View all students >></a></p>
          </div>
      </div>
    );
  }
}
