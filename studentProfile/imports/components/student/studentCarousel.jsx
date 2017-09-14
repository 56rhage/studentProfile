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


export default class studentCarousel extends Component{

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

  renderProjectSwiper(allStudents) {
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
           width: 200,
           height: 200,
           borderRadius: '50%',
        };

        var centerImage = {
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
        }

      if (allStudents.length > 0) {
          return (
            <Swiper {...params}>
                {this.props.allStudents.map((studentProject, index) => {
                    var studentURL = "/ViewStudent/" + studentProject.student_id;
                    console.log(studentProject.project_role);
                    var text = (typeof studentProject.student_desc != "undefined") ? studentProject.student_desc : studentProject.project_role;

                    return(
                        <div className="wrapper" key={index}>
                            <div className="card radius"> {/*shadowDepth1*/}
                                <Link to ={{
                                    //pathname: '/ViewProject',
                                    pathname: '/ViewStudent/' + studentProject.student_id,
                                    //state: { ProjectID: studentProject.pid }
                                }}>
                                    <div className="card__image border-tlr-radius" style={ centerImage }>
                                        <img className="normal" src={studentProject.student_photo} alt="image" style={imageStyle} />
                                    </div>

                                    <div className="card__content card__padding">
                                        <h2><a href={studentURL}>{ studentProject.student_name }</a></h2>

                                        <LinesEllipsis
                                            text={ trimText(text) }
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
                    this.props.allStudents.map((studentProject, index) => {
                        var studentURL = "/ViewStudent/" + studentProject.student_id;
                        var text = (typeof studentProject.student_desc != "undefined") ? studentProject.student_desc : studentProject.project_role;

                        return(
                            <div className="wrapper" key={index}>
                                <div className="card radius"> {/*shadowDepth1*/}
                                    <Link to ={{
                                        //pathname: '/ViewProject',
                                        pathname: '/ViewStudent/' + studentProject.student_id,
                                        //state: { ProjectID: studentProject.pid }
                                    }}>
                                        <div className="card__image border-tlr-radius" style={ centerImage }>
                                            <img className="normal" src={studentProject.student_photo} alt="image" style={imageStyle} />
                                        </div>

                                        <div className="card__content card__padding">
                                            <article className="card__article">
                                                <h2><a href="#">{ studentProject.student_name }</a></h2>

                                                <LinesEllipsis
                                                    text={trimText(text)}
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


    const { allStudents, header } = this.props;

    return (
        <div>
            {header ?
                header
            :
            <h1 className="mainHeader">Featured Students</h1>
            }
            {this.renderProjectSwiper(allStudents)}
            <div className="clearfix"></div>
        </div>
        );

    }

}

studentCarousel.propTypes = {
    allStudents: PropTypes.array.isRequired,
};
