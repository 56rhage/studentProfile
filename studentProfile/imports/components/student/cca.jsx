import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

import NavigationApp from '../../components/NavigationApp.jsx';
import Footer from '../../components/Footer.jsx';

export default class cca extends Component{
  render(){
      var spacing = {
          padding: '2%',
      }

    return (
        <div>
            <div className="container">
                <div className="left-column">
                    <div id="headerStudent">
                        <h1>Community Service</h1>
                        {this.props.cca.map((comunity, index) => {
                                var cca = comunity.cca;
                                var role = comunity.role;
                                var start = comunity.start_date;
                                var end = comunity.end_date;

                            return(
                                <div style={ spacing }>
                                    <div className="blog-card spring-fever">
                                        <div className="title-content">
                                            <h3>{cca} - {role}</h3>
                                            <hr />
                                            {/*<div className="intro">{description}</div>*/}
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
            </div>
        </div>
        );
    }

}

cca.propTypes = {
    cca: PropTypes.array.isRequired,
};
