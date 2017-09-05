import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';
import { Route } from 'react-router';

import NavigationApp from '../../components/NavigationApp.jsx';
import Footer from '../../components/Footer.jsx';

import Education from '../student/education.jsx';
import Work from '../student/work.jsx';
import CommunityService from '../student/communityService.jsx';
import Skillsets from '../student/skillsets.jsx';
import ProjectCarousel from '../project/projectCarousel.jsx';

import Swiper from 'react-id-swiper';
import { Line, Circle } from 'rc-progress';

export default class handleViewStudent extends Component{

  constructor(props) {
    super(props);

    this.state = {
        count: 0,
        counterResume: false,
        counterPortfolio: false,
    };
  }

  setCounter(){
    this.setState({
        count: this.state.count + 1
    });
  }

  componentDidMount(){
      {this.props.eduLvl.length > 1 || this.props.workExp.length > 1 || this.props.cca.length > 1 || this.props.studentSkills > 1 ?
          this.setState({
              counterResume: true
          })
          : "" }
      {this.props.projects.length > 1 ?
          this.setState({
              counterPortfolio: true
          })
          : "" }
  }

  openInNewTab(field) {
    console.log(field);
    const url = "http://" + field;
    var win = window.open(url, '_blank');
    win.focus();
  }

  static propTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        illustration: PropTypes.string,
        even: PropTypes.bool
    };


  render(){

    var imageStyle = {
        width: '100%',
    }

    var iconPadding = {
        paddingRight: '5px',
        paddingLeft: '5px',
    }

    var tableCenter = {
        margin: '0px auto',
    }

    var tableWidth = {
        width: '50%',
        padding: '10px',
    }

    var tableWidthImg = {
        width: '30%',
        padding: '10px',
    }

    var subText = {
        fontWeight: '300',
    }

    var icon = {
        width: '62px',
        float: 'center',
    }

    return (
        <div>
            <NavigationApp />
            <br/>
            <div id="wrap">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-3">
                        </div>
                        <div className="col-xs-2">
                            <div className="img-circle">
                                {this.props.photo == "" || this.props.photo == "null" || this.props.photo == null ?
                                    <img className="normal" src="../img/user.png" alt="poster" className="imageStyle" />
                                :
                                <img className="normal" src={this.props.photo} alt="poster" className="image" />
                                }
                            </div>
                        </div>

                        <div className="col-xs-5">
                            <h1 className="studentName">{this.props.name}</h1>
                            <p className="indiStudent">
                                <table>
                                    <tr>
                                        <td style={iconPadding}><i className="fa fa-envelope"></i></td>
                                        <td>{this.props.email}</td>
                                    </tr>
                                    <tr>
                                        <td style={iconPadding}><i className="fa fa-graduation-cap"></i></td>
                                        <td>{this.props.courseName}</td>
                                    </tr>
                                    {this.props.hobbies == "" ? "" :
                                    <tr>
                                        <td style={iconPadding}><i className="fa fa-lightbulb-o"></i></td>
                                        <td>{ this.props.hobbies }</td>
                                    </tr>
                                    }
                                </table>
                            </p>
                            <div className="footer-logo">
                                <div className="social">
                                    {this.props.personalProfile == "" ? "" :
                                    <a onClick={this.openInNewTab.bind(this, this.props.personalProfile)}>
                                        <i className="fa fa-globe fa-3x" aria-hidden="true"></i>
                                    </a>
                                    }
                                    {this.props.git == "" ? "" :
                                    <a onClick={this.openInNewTab.bind(this, this.props.git)}>
                                        <i className="fa fa-github fa-3x" aria-hidden="true"></i>
                                    </a>
                                    }
                                    {this.props.twitter == "" ? "" :
                                    <a onClick={this.openInNewTab.bind(this, this.props.twitter)}>
                                        <i className="fa fa-twitter fa-3x" aria-hidden="true"></i>
                                    </a>
                                    }
                                    {this.props.linkedin == "" ? "" :
                                    <a onClick={this.openInNewTab.bind(this, this.props.linkedin)}>
                                        <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
                                    </a>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-3">
                        </div>
                    </div>
                </div>
            </div>

            { this.props.studentDesc == "" ? "" :
            <div id="wrap">
                <div id="header">
                    <h1 className="mainHeader">About me</h1>
                    <p className="indiStudent">{ this.props.studentDesc }</p>
                </div>
            </div>
            }

            { this.state.counterResume ?
                <div>
                    <hr/>
                    <table style={ tableCenter }>
                        <tr>
                            <td style={ tableWidthImg }><img className="normal" src="./../img/curriculum.png" style={ icon }/></td>
                            <td style={ tableWidth }>
                                <h1>Resume</h1>
                                <h3 style={ subText }>My Academic Qualification</h3>
                            </td>
                        </tr>
                    </table>
                    <hr/>
                </div>
            : "" }

            <div className="clearfix"></div>

            {this.props.eduLvl.length >= 1 && this.props.workExp.length >= 1 ?
                <div>
                    <div className="container">
                        <div className="left-column">
                            <Work
                                workExp={this.props.workExp}
                            />
                        </div>

                        <div className="clearfix"></div>

                        <div className="right-column">
                            <Education
                                educationLevel={this.props.eduLvl}
                            />
                        </div>

                    </div>
                </div>
            :
            <div>
                {this.props.eduLvl.length >= 1 ?
                    <div id="wrap">
                        <Education
                            educationLevel={this.props.eduLvl}
                        />
                    </div>
                : ""}

                {this.props.workExp.length >= 1 ?
                    <div id="wrap">
                        <Work
                            workExp={this.props.workExp}
                        />
                    </div>
                : ""}
            </div>
            }

            <div className="clearfix"></div>

            {this.props.cca.length >= 1 && this.props.studentSkills.length >= 1 ?
                <div className="container">
                    <div className="left-column">
                        <Skillsets
                            studentSkills={this.props.studentSkills}
                        />
                    </div>

                    <div className="clearfix"></div>

                    <div className="right-column">
                        <div id="headerStudent">
                            <CommunityService
                                cca={this.props.cca}
                            />
                        </div>
                    </div>
                </div>
            :
            <div>
                {this.props.cca.length >= 1 ?
                    <div id="wrap">
                        <CommunityService
                            cca={this.props.cca}
                        />
                    </div>
                : ""}

                {this.props.studentSkills.length >= 1 ?
                    <div id="wrap">
                        <Skillsets
                            studentSkills={this.props.studentSkills}
                        />
                    </div>
                : ""}
            </div>
            }

            <div className="clearfix"></div>

            {this.state.counterPortfolio ?
                <div>
                    <hr/>
                    <table style={ tableCenter }>
                        <tr>
                            <td style={ tableWidthImg }><img className="normal" src="./../img/briefcase.png" style={ icon }/></td>
                            <td style={ tableWidth }>
                                <h1>Portfolio</h1>
                                <h3 style={ subText }>Some of My Works</h3>
                            </td>
                        </tr>
                    </table>
                    <hr/>
                </div>
            : "" }

            {this.props.projects.length > 0 &&
                <div id="wrap">
                    <div id="header">
                        {/*<h1 className="mainHeader">Projects</h1>*/}

                        <div className="w3-container">
                            {/*<h2>Mobile First Responsiveness</h2>
                                    <p className="w3-large">Try to resize the window!</p>
                            http://54.191.109.239/FYPXpal/AmandaInfo*/}
                        </div>

                        <div className="w3-row w3-border">
                            <ProjectCarousel
                                allProjects={this.props.projects}
                            />
                        </div>

                        {/*This is to ensure that the div height covers all content*/}
                        <div className="clearfix"></div>
                    </div>
                </div>
            }

            <br/>
            <Footer />
        </div>
        );

    }

}

handleViewStudent.propTypes = {
    name: PropTypes.string.isRequired,
    studentDesc: PropTypes.string,
    courseName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    personalProfile: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    git: PropTypes.string.isRequired,
    projects: PropTypes.array.isRequired,
    studentSkills: PropTypes.array.isRequired,
    hobbies: PropTypes.string.isRequired,
    eduLvl: PropTypes.array.isRequired,
    workExp: PropTypes.array.isRequired,
    cert: PropTypes.array.isRequired,
    cca: PropTypes.array.isRequired,
    achievements: PropTypes.array.isRequired,
};
