import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

import LinesEllipsis from 'react-lines-ellipsis';
import Swiper from 'react-id-swiper';
import { Line, Circle } from 'rc-progress';

function trimText(str) {
    if (str.length > 200) {
        const maxLength = 182;
        const trimmedString = str.substr(0, maxLength);
        return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))).concat('...');
    }
    return str;
}


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

  renderProjectSwiper(allProjects) {
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
        maxWidth: '280px',
        maxHeight: '395px',
    }

    var centerImage = {
        display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
      if (allProjects.length > 0) {
          return (
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
                                        <h2><a href="#">{ studentProject.project_name }</a></h2>

                                        <LinesEllipsis
                                            text={ trimText(studentProject.project_desc) }
                                            maxLine='3'
                                            ellipsis=''
                                            trimRight
                                            basedOn='letters'
                                        />
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
                                            <img className="normal" src={ studentProject.project_poster } alt="image" style={ imageStyle } />
                                        </div>

                                        <div className="card__content card__padding">
                                            <article className="card__article">
                                                <h2><a href="#">{ studentProject.project_name }</a></h2>

                                                <LinesEllipsis
                                                    text={ trimText(studentProject.project_desc) }
                                                    maxLine='3'
                                                    ellipsis=''
                                                    trimRight
                                                    basedOn='letters'
                                                />
                                            </article>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
            </Swiper>
          );

      }
      return null;
  }

  render(){


    const { allProjects, header } = this.props;

    return (
        <div>
            {header ?
                header 
                :
                <h1 className="mainHeader">Featured Projects</h1>
            }
            {this.renderProjectSwiper(allProjects)}
            <div className="clearfix"></div>
        </div>
        );

    }

}

projectCarousel.propTypes = {
    allProjects: PropTypes.array.isRequired,
    header: PropTypes.node
};
