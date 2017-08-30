import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

import StudentCarousel from '../components/student/studentCarousel.jsx';

import Swiper from 'react-id-swiper';
import LinesEllipsis from 'react-lines-ellipsis';

function trimText(str) {
    if (str.length > 200) {
        const maxLength = 182;
        const trimmedString = str.substr(0, maxLength);
        return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))).concat('...');
    }
    return str.concat('...');
}

export default class FeaturedStudents extends Component{

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

    const { students } = this.props;

    return (
      <div id="wrap"  style={{overflowX: 'hidden' }}>
          <div id="header">
              {/*<h1 className="mainHeader">Projects</h1>*/}
              <div className="w3-container">
                  {/*<h2>Mobile First Responsiveness</h2>
                          <p className="w3-large">Try to resize the window!</p>
                  http://54.191.109.239/FYPXpal/AmandaInfo*/}
              </div>
              <div className="w3-row w3-border">
                  <StudentCarousel
                      allStudents={students}
                  />
              </div>
              {/*This is to ensure that the div height covers all content*/}
              <div className="clearfix"></div>
              <p className="mainLink"><a href="/AllStudents">View all students >></a></p>
          </div>
      </div>
    );
  }
}
