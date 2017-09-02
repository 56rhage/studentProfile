import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

import ProjectCarousel from '../components/project/projectCarousel.jsx';

import Swiper from 'react-id-swiper';

export default class FeaturedProjects extends Component{

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
          autoplay: 2000,
          coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : false
          }
        }

        const { projects } = this.props;

    return (
        <div id="wrap" style={{overflowX: 'hidden' }}>
            <div id="header">
                {/*<h1 className="mainHeader">Projects</h1>*/}
                <div className="w3-container">
                    {/*<h2>Mobile First Responsiveness</h2>
                            <p className="w3-large">Try to resize the window!</p>
                    http://54.191.109.239/FYPXpal/AmandaInfo*/}
                </div>
                <div className="w3-row w3-border">
                    <ProjectCarousel
                        allProjects={projects}
                    />
                </div>
                {/*This is to ensure that the div height covers all content*/}
                <div className="clearfix"></div>
                <p className="mainLink"><a href="/AllProjects">View all projects >></a></p>
            </div>
        </div>
    );
  }
}
