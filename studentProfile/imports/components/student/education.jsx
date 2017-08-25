import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

import NavigationApp from '../../components/NavigationApp.jsx';
import Footer from '../../components/Footer.jsx';

export default class education extends Component{

  render(){
      var spacing = {
          padding: '2%',
      }

    return (
        <div>
            <div id="headerStudent">
                <h1>Education</h1>
                {this.props.educationLevel.map((education, index) => {
                        var school = education.school;
                        var eduLevel = education.education_level;
                        var fieldOfStudy = education.field_of_study;
                        var start = education.timeperiodfrom;
                        var end = education.timeperiodto;

                    return(
                        <div style={ spacing } key={index}>
                            <div className="blog-card spring-fever">
                                <div className="title-content">
                                    <h3>{school} - { eduLevel }</h3>
                                    <hr />
                                    <div className="intro">{fieldOfStudy}</div>
                                </div>
                                {/*<div className="card-info">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                                </div>*/}
                                <div className="utility-info">
                                    <ul className="utility-list">
                                        <li className="comments">Start Date: {start}</li>
                                        <li className="date">End Date: {end}</li>
                                    </ul>
                                </div>
                                <div className="gradient-overlay"></div>
                                <div className="color-overlay"></div>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </div>
        );

    }

}

education.propTypes = {
    educationLevel: PropTypes.array.isRequired,
};
