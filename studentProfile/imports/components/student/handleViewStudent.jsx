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
import Scrollchor from 'react-scrollchor';

const parseDate = (dateString) => {
    const tokenizedDate = dateString.split('-');
    const month = Number(tokenizedDate[0]);
    
    let result = ''
    switch (month) {
        case 1: 
            result = 'January';
            break;
        case 2: 
            result = 'February';
            break;
        case 3: 
            result = 'March';
            break;
        case 4: 
            result = 'April';
            break;
        case 5: 
            result = 'May';
            break;
        case 6: 
            result = 'June';
            break;
        case 7: 
            result = 'July';
            break;
        case 8: 
            result = 'August';
            break;
        case 9: 
            result = 'September';
            break;
        case 10: 
            result = 'October';
            break;
        case 11: 
            result = 'Novemebr';
            break;
        case 12: 
            result = 'December';   
            break;                                                                                                         
    }
    return result + ` ${tokenizedDate[1]}`
}


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

    renderResume() {
        const { workExp, eduLvl, cert, cca, achievements } = this.props;
        return (
            <div id="resume" className="resume-container">
                <div><span className="studentName studentname-resume">{this.props.name}</span></div>
                <div className="resume-cont">
                    <div className="resume-field">
                        <div className="resume-header">
                            <span className="starter">{workExp.length > 0 ? "|" : null }</span>
                            <span className="resume-span">{workExp.length > 0 ? "Experience" : null }</span>
                        </div>
                        <div className="experience-list">
                            {workExp.length > 0 ? workExp.map((item) => {
                            return (
                                    <div className="res-item">
                                        <div className="res-item-header">
                                            <span className="resume-position">{item.title}  | {item.company}</span>
                                            <span className="resume-position">{parseDate(item.start_date)}  - {parseDate(item.end_date)}</span>
                                        </div>
                                        <ul>
                                            <li><span className="resume-desc">{item.description}</span></li>
                                        </ul>
                                    </div>
                                );
                                })
                            :  "" }
                        </div>
                    </div>
                    <div className="resume-field">
                        <div className="resume-header">
                            <span className="starter">{eduLvl.length > 0 ? "|" : null }</span>
                            <span className="resume-span">{eduLvl.length > 0 ? "Education" : null }</span>
                        </div>
                        <div className="experience-list">
                            {eduLvl.length > 0 ? eduLvl.map((item) => {
                            return (
                                    <div className="res-item">
                                        <div className="res-item-header">
                                            <span className="resume-position">{item.school}  | {item.education_level}</span>
                                            <span className="resume-position">{item.timeperiodfrom}  - {item.timeperiodfrom}</span>
                                        </div>
                                        <ul>
                                            <li><span className="resume-desc">Field of study: {item.field_of_study === null ? "N/A" : "N/A"}</span></li>
                                        </ul>
                                    </div>
                                );
                                })
                            :  "" }
                        </div>
                    </div>
                    <div className="resume-field">
                        <div className="resume-header">
                            <span className="starter">{cert.length > 0 ? "|" : null }</span>
                            <span className="resume-span">{cert.length > 0 ? "Certifications" : null }</span>
                        </div>
                        <div className="experience-list">
                            {cert.length > 0 ? cert.map((item) => {
                            return (
                                    <div className="res-item">
                                        <div className="res-item-header">
                                            <span className="resume-position">{item.certification_name}</span>
                                            <span className="resume-position">Start Date: {item.start_date}</span>
                                        </div>
                                    </div>
                                );
                                })
                            :  "" }
                        </div>
                    </div>
                    <div className="resume-field">
                        <div className="resume-header">
                            <span className="starter">{cca.length > 0 ? "|" : null }</span>
                            <span className="resume-span">{cca.length > 0 ? "Community Service" : null }</span>
                        </div>                
                        <div className="experience-list">
                            {cca.length > 0 ? cca.map((item) => {
                            return (
                                    <div className="res-item">
                                        <div className="res-item-header">
                                            <span className="resume-position">{item.cca}</span>
                                            <span className="resume-position">{parseDate(item.start_date)} - {parseDate(item.end_date)}</span>
                                            <span className="resume-position">Role: {item.role}</span>
                                        </div>
                                    </div>
                                );
                                })
                            :  "" }
                        </div>
                    </div>
                    <div className="resume-field">
                        <div className="resume-header">
                            <span className="starter">{achievements.length > 0 ? "|" : null }</span>
                            <span className="resume-span">{achievements.length > 0 ? "Awards": null}</span>
                        </div>                
                        <div className="experience-list">
                            {achievements.length > 0 ? achievements.map((item) => {
                            return (
                                    <div className="res-item">
                                        <div className="res-item-header">
                                            <span className="resume-position">{item.award}</span>
                                            <span className="resume-position">{parseDate(item.awarding_date)}}</span>
                                        </div>
                                    </div>
                                );
                                })
                            :  "" }
                        </div>
                    </div>  
                </div>                                           
            </div>
        )
    }

    renderStudentProfile() {
        const anim = { offset: 0, duration: 400 };
        if (this.props.name) {
            return (
                <div className="portfolio-card">
                    <div className="student-info-custom">
                        <div className="student-intro">
                            <div className="avatar-responsive">
                                <div className="img-circle custom-avatar">
                                    {this.props.photo == "" || this.props.photo == "null" || this.props.photo == null ?
                                        <img className="normal" src="../img/user.png" alt="poster" className="imageStyle" />
                                    :
                                    <img className="normal" src={this.props.photo} alt="poster" className="image" />
                                    }
                                </div>
                            </div>
                            <div className="student-contact-items">
                                <h1 className="studentName studentname-custom">{this.props.name}</h1>
                                <div className="footer-logo">
                                    <div className="custom-social">
                                        {this.props.personalProfile == "" ? "" :
                                        <a onClick={this.openInNewTab.bind(this, this.props.personalProfile)}>
                                            <i className="fa fa-globe fa-2x" aria-hidden="true"></i>
                                        </a>
                                        }
                                        {this.props.git == "" ? "" :
                                        <a onClick={this.openInNewTab.bind(this, this.props.git)}>
                                            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                                        </a>
                                        }
                                        {this.props.twitter == "" ? "" :
                                        <a onClick={this.openInNewTab.bind(this, this.props.twitter)}>
                                            <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                                        </a>
                                        }
                                        {this.props.linkedin == "" ? "" :
                                        <a onClick={this.openInNewTab.bind(this, this.props.linkedin)}>
                                            <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                                        </a>
                                        }
                                    </div>
                                    <div className="custom-email">
                                        <span>{this.props.email}</span>
                                    </div>
                                    <div>
                                        
                                    </div>                            
                                </div>
                            </div>
                            <div className="student-card nxs">
                                <div className="student-header-container">
                                    <i className="fa fa-graduation-cap fa-2x"></i>
                                    <h1 className="mainHeader student-header-text">Course</h1>
                                </div>
                                <p className="">{ this.props.courseName }</p>
                            </div>                                                                       
                        </div>
                    </div>
                    <div className="student-info-custom">
                        <div className="action-btns">
                            <span className="y-btn"><Scrollchor to="resume" animate={anim}>VIEW RESUME</Scrollchor></span>
                            <span className="y-btn"><Scrollchor to="portfolio" animate={anim}>MY PORTFOLIO</Scrollchor></span>
                        </div>
                        <div className="student-about-info">
                            <div className="student-card">
                                <h1 className="mainHeader student-header-text">About me</h1>
                                <p className="">{ this.props.studentDesc }</p>
                            </div>
                        </div>
                        <div className="student-skills-holder">
                            <h1>Skill Set</h1>
                            <div className="skills-cont">
                                {this.props.studentSkills.map((item, index) => {
                                    return (
                                        <div className="student-skill-card" key={index}>{item.skill}</div>
                                        
                                    );
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>         
            );
        }
        return (
            <div className="portfolio-card">
                <span className="custom-loader">
                    <i className="fa fa-spinner fa-spin fa-5x"></i>
                </span>
            </div>
        )
    }


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
            {this.renderStudentProfile()}

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

                        <div className="w3-row w3-border" id="portfolio">
                            <ProjectCarousel
                                allProjects={this.props.projects}
                            />
                        </div>

                        {/*This is to ensure that the div height covers all content*/}
                        <div className="clearfix"></div>
                    </div>
                </div>
            }

            <br />
            {this.renderResume()}
            <br />
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
