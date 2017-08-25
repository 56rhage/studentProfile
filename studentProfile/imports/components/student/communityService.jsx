import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

import NavigationApp from '../../components/NavigationApp.jsx';
import Footer from '../../components/Footer.jsx';

export default class communityService extends Component{

  render(){
      var spacing = {
          padding: '2%',
      }

    return (
        <div>
            <div id="headerStudent">
                <h1 className="headerStudent">Community Service</h1>
                {this.props.cca.map((community, index) => {
                        var cca = community.cca;
                        var role = community.role;
                        var start = community.start_date;
                        var end = community.end_date;

                    return(
                        <div style={ spacing } key={index}>
                            <div className="blog-card spring-fever">
                                <div className="title-content">
                                    <h3>{cca} - { role }</h3>
                                    <hr />
                                </div>
                                {/*<div className="intro">{fieldOfStudy}</div>
                                    <div className="card-info">
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

communityService.propTypes = {
    cca: PropTypes.array.isRequired,
};
