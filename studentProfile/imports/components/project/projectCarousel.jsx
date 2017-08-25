import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

import Swiper from 'react-id-swiper';
import { Line, Circle } from 'rc-progress';

export default class projectCarousel extends Component{

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
            <h1 className="mainHeader">Featured Projects</h1>

            <Swiper {...params}>
                {this.props.allProjects.map((studentProject, index) => {
                    return(
                        <div className="wrapper" key={index}>
                            <div className="card radius"> {/*shadowDepth1*/}
                                <Link to ={{
                                    //pathname: '/ViewProject',
                                    pathname: '/ViewProject/' + studentProject.pid,
                                    //state: { ProjectID: studentProject.pid }
                                }}>
                                    <div className="card__image border-tlr-radius" style={ centerImage }>
                                        <img src={ studentProject.project_poster } alt="image" style={ imageStyle } />
                                    </div>

                                    <div className="card__content card__padding">
                                        <article className="card__article">
                                            <h2><a href="#">{ studentProject.project_name }</a></h2>

                                            <p>{ studentProject.project_desc }</p>
                                        </article>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )

                    { this.setCounter }
                }
                )}

                {this.state.count < 2 &&
                    this.props.allProjects.map((studentProject, index) => {
                        return(
                            <div className="wrapper" key={index}>
                                <div className="card radius"> {/*shadowDepth1*/}
                                    <Link to ={{
                                        //pathname: '/ViewProject',
                                        pathname: '/ViewProject/' + studentProject.pid,
                                        //state: { ProjectID: studentProject.pid }
                                    }}>
                                        <div className="card__image border-tlr-radius" style={ centerImage }>
                                            <img src={ studentProject.project_poster } alt="image" style={ imageStyle } />
                                        </div>

                                        <div className="card__content card__padding">
                                            <article className="card__article">
                                                <h2><a href="#">{ studentProject.project_name }</a></h2>

                                                <p>{ studentProject.project_desc }</p>
                                            </article>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </Swiper>
        </div>
        );

    }

}

projectCarousel.propTypes = {
    allProjects: PropTypes.array.isRequired,
};
