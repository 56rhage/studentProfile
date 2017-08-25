import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Request from 'react-http-request';

import Student from '../components/student/handleViewStudent.jsx';

/*Analytics*/
import ReactGA from 'react-ga';

export const initGA = () => {
  console.log('GA init');
  ReactGA.initialize('UA-101967047-1');
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname});
  ReactGA.pageview(window.location.pathname);
}
/*Analytics*/

export default class ViewStudent extends Component{

    constructor(props) {
      super(props);

      this.state = {
          linkedin: '',
          email: '',
          name: '',
          photo: '',
          personalProfile: '',
          twitter: '',
          git: '',
          projects: [],
          studentSkills: [],
          studentID: props.match.params.studentID,
          //studentID: this.props.location.state.StudentID,
          hobbies: '',
          eduLvl: [],
          workExp: [],
          cert: [],
          cca: [],
          achievements: [],
      };
    }

    componentDidMount(){
        initGA(); /*Analytics*/
        logPageView(); /*Analytics*/
      }

    async componentDidMount(){
        proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        /*apiURL = 'http://54.191.109.239/FYPXpal/GetStudentInfo';*/
        var studentID = this.state.studentID;
        apiURL = 'http://54.191.109.239/xPalBackend_FYPXpal/GetStudentData?student_id=' + studentID;
        options = {
            method: 'GET',
        };

      try{
          /*var response = await fetch(proxyUrl + apiURL, options);*/
          var response = await fetch(proxyUrl + apiURL, options);

          // response message
          var data = await response.json();
          console.log(data);
          var status = response.status;

          if (status == 200){
          // response code
          var name = data.student.student_name;
          var studentDesc = data.student.student_desc;
          var courseName = data.student.course_id + ', ' + data.student.course_name;
          var email = data.student.email;
          var photo = data.student.student_photo;
          var linkedin = data.student.linkedin_url;
          var personalProfile = data.student.personal_portfolio_url;
          var twitter = data.student.twitter_url;
          var git = data.student.git_url;
          var projects = data.student.project_list;
          var studentSkills = data.student.student_skills;
          var hobbies = data.student.hobbies;
          var eduLvl = data.student.student_education_level;
          var workExp = data.student.student_work_experience;
          var cert = data.student.certification;
          var cca = data.student.cca_community_service;
          var achievements = data.student.achievement_award;

          this.setState({
            name: name,
            studentDesc: studentDesc,
            courseName: courseName,
            email: email,
            photo: photo,
            linkedin: linkedin,
            personalProfile: personalProfile,
            twitter: twitter,
            git: git,
            projects: projects,
            studentSkills: studentSkills,
            hobbies: hobbies,
            eduLvl: eduLvl,
            workExp: workExp,
            cert: cert,
            cca: cca,
            achievements: achievements,
          });
          
          }else{
              //Handle other than success
          }
      }catch(error){
          alert(error);
      }
    }

  render() {

    return (
        <div>
            <title>View Student - {this.state.name}</title>
            <Student
                name={this.state.name}
                studentDesc={this.state.studentDesc}
                courseName={this.state.courseName}
                email={this.state.email}
                photo={this.state.photo}
                linkedin={this.state.personalProfile}
                personalProfile={this.state.personalProfile}
                twitter={this.state.twitter}
                git={this.state.git}
                projects={this.state.projects}
                studentSkills={this.state.studentSkills}
                hobbies={this.state.hobbies}
                eduLvl={this.state.eduLvl}
                workExp={this.state.workExp}
                cert={this.state.cert}
                cca={this.state.cca}
                achievements={this.state.achievements}
            />

        </div>
    );
  }
}
