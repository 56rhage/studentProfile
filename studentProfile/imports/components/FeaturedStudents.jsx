import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

import Swiper from 'react-id-swiper';
import LinesEllipsis from 'react-lines-ellipsis';

export default class FeaturedStudents extends Component{

    renderSwiper(featuredStudents) {
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

        var imageStyle = {
           width: 200,
           height: 200,
           borderRadius: '50%',
       };

       var centerImage = {
           display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
       }
        if (featuredStudents.length > 0) {
            return (
                <Swiper {...params}>
                    {featuredStudents.map((studentProject, index) => {
                        var studentURL = "/ViewStudent/" + studentProject.student_id;

                        return(
                            <div className="wrapper" key={index}>
                                <div className="card radius"> {/*shadowDepth1*/}
                                    <div className="card__image border-tlr-radius" style={centerImage}>
                                        <img src={studentProject.student_photo} alt="image" style={imageStyle} />
                                    </div>
                                    <div className="card__content card__padding">
                                        <article className="card__article">
                                            <h2><a href={studentURL}>{studentProject.student_name}</a></h2>
                                            <LinesEllipsis
                                                text={studentProject.student_desc}
                                                maxLine='3'
                                                ellipsis='...'
                                                trimRight
                                                basedOn='letters'
                                            />
                                        </article>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}
                </Swiper>
            );
        }
        return null;
    }

  render() {

    const { students } = this.props;
    return (
      <div id="wrap">
          <div id="header">
              <h1 className="mainHeader">Featured Students</h1>
              {this.renderSwiper(students)}
              {/*This is to ensure that the div height covers all content*/}
              <div className="clearfix"></div>
              <p className="mainLink"><a href="/AllStudents">View all students >></a></p>
          </div>
      </div>
    );
  }
}
