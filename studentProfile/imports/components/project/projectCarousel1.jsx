import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

import Swiper from 'react-id-swiper';
import { Line, Circle } from 'rc-progress';

export default class projectCarousel1 extends Component{

  constructor(props) {
    super(props);

    this.state = {
        count: 0,
    };
  }

  setCounter(){
    this.setState({
        count: this.state.count + 1
    });
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
            slideShadows : false
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

    return (
        <div>
            <Swiper {...params}>
                <div className="wrapper">
                    <div className="card radius"> {/*shadowDepth1*/}
                        <div className="card__image border-tlr-radius" className="centerImage">
                            <img className="normal" src="https://s3-ap-southeast-1.amazonaws.com/xpal/Project/poster-1.jpg" alt="image" className="imageStyleProject" />
                        </div>

                        <div className="card__content card__padding">
                            <article className="card__article">
                                <h2><a href="/ViewProject/1">Morphy</a></h2>
                                <p>Morphy Project</p>
                            </article>
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="card radius shadowDepth1">
                        <div className="card__image border-tlr-radius" className="centerImage">
                            <img className="normal" src="https://s3-ap-southeast-1.amazonaws.com/xpal/Project/poster-1d55cd9b-8b4e-454e-8e56-523188ea96a3.png" alt="image" className="imageStyleProject" />
                        </div>

                        <div className="card__content card__padding">
                            <article className="card__article">
                                <h2><a href="/ViewProject/1d55cd9b-8b4e-454e-8e56-523188ea96a3">Retail Banking Application Process - LifeLah</a></h2>
                                <p>Banking Project</p>
                            </article>
                        </div>
                    </div>
                </div>


                <div className="wrapper">
                    <div className="card radius shadowDepth1">
                        <div className="card__image border-tlr-radius" className="centerImage">
                            <img className="normal" src="https://s3-ap-southeast-1.amazonaws.com/xpal/Project/poster-2.jpg" alt="image" className="imageStyleProject" />
                        </div>

                        <div className="card__content card__padding">
                            <article className="card__article">
                                <h2><a href="/ViewProject/2">Pain-X</a></h2>
                                <p>Pain Project</p>
                            </article>
                        </div>
                    </div>
                </div>


                <div className="wrapper">
                    <div className="card radius shadowDepth1">
                        <div className="card__image border-tlr-radius" className="centerImage">
                            <img className="normal" src="https://s3-ap-southeast-1.amazonaws.com/xpal/Project/poster-2c3158ab-1d25-4c91-af06-4618f6854798.png" alt="image" className="imageStyleProject" />
                        </div>

                        <div className="card__content card__padding">
                            <article className="card__article">
                                <h2><a href="/ViewProject/2c3158ab-1d25-4c91-af06-4618f6854798">Escape</a></h2>
                                <p>Escape Project</p>
                            </article>
                        </div>
                    </div>
                </div>
            </Swiper>
        </div>
        );

    }

}

projectCarousel1.propTypes = {
    allProjects: PropTypes.array.isRequired,
};
