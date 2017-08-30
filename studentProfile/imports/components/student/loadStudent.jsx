import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

import Swiper from 'react-id-swiper';

export default class loadStudent extends Component{

  constructor(props) {
    super(props);
  }

  render(){
      const params = {
          pagination: '.swiper-pagination',
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          allowSwipeToPrev: true,
          allowSwipeToNext: true,
          loop: true,
          loopedSlides: 3,
          autoplay: 2000,
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
    }

    var centerImage = {
        display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  }

  var profileImg = './img/profile.jpg';
  var project = './img/Project1.jpg';

    return (
        <div>
            <div className="w3-container">
                {/*<h2>Mobile First Responsiveness</h2>
                    <p className="w3-large">Try to resize the window!</p>
                http://54.191.109.239/FYPXpal/AmandaInfo*/}
            </div>

            <div className="w3-row w3-border">
                <Swiper {...params}>
                    {this.props.passProjects.map((studentProject, index) => {
                        return(
                            <div className="wrapper"  key={index}>
                                <div className="card radius"> {/*shadowDepth1*/}
                                    <div className="card__image border-tlr-radius" style={ centerImage }>
                                        <img className="normal" src={ project } alt="image" style={ imageStyle } />
                                    </div>

                                    <div className="card__content card__padding">
                                        <article className="card__article">
                                            <h2><a href="#">{ studentProject.project_name }</a></h2>

                                            <p>{ studentProject.project_desc }</p>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}
                </Swiper>
            </div>
        </div>
        );

    }

}

loadStudent.propTypes = {
    passProjects: PropTypes.array.isRequired,
};
