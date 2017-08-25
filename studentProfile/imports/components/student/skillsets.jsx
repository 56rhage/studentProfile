import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

import NavigationApp from '../../components/NavigationApp.jsx';
import Footer from '../../components/Footer.jsx';

export default class skillsets extends Component{
  render(){
      var spacing = {
          padding: '2%',
      }

    return (
        <div>
            <div id="headerStudent">
                <h1 className="headerStudent">Skillsets</h1>
                <div className="indiSkill clearfix">
                            {this.props.studentSkills.map((studentSkills, index) => {
                                var colors = ['#43a19e', '#a37dbd', '#fe9824', '#6ad37c'];

                                return(
                                    <div key={index}>
                                        <div className="skills">{studentSkills.skill}</div>
                                        {/*<Line percent={competency + '0'} strokeWidth='4'
                                            strokeColor={colors[index]}
                                            />
                                        <td><div className="skills">{studentSkills.skill}</div></td>*/}
                                    </div>
                                )
                            }
                            )}
                </div>
            </div>
        </div>
        );

    }

}

skillsets.propTypes = {
    studentSkills: PropTypes.array.isRequired,
};
