import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

import NavigationApp from '../../components/NavigationApp.jsx';
import Footer from '../../components/Footer.jsx';

export default class work extends Component{
  render(){
      var spacing = {
          padding: '2%',
      }

    return (
        <div>
            <div id="headerStudent">
                <h1>Work Experience</h1>
                {this.props.workExp.map((work, index) => {
                    var title = work.title;
                    var company = work.company;
                    var start = work.start_date;
                    var end = work.end_date;
                    var description = work.description;

                    return(
                        <div style={ spacing } key={index}>
                            <div className="blog-card spring-fever">
                                <div className="title-content">
                                    <h3>{title} - {company}</h3>
                                    <hr />
                                    <div className="intro">{description}</div>
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

work.propTypes = {
    workExp: PropTypes.array.isRequired,
};
