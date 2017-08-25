import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Request from 'react-http-request';

import Project from '../components/project/handleViewProject.jsx';

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

export default class ViewProject extends Component{

    constructor(props) {
      super(props);

      this.state = {
          projectName: '',
          projectStartDate: '',
          projectEndDate: '',
          projectDesc: '',
          projectPoster: '',
          projectVideoUrl: '',
          projectApproved: '',
          projectImages: [],
          projectMembers: [],
          //projectID: this.props.location.state.ProjectID,
          projectID: props.match.params.projectID,
      };
    }

    componentDidMount(){
        initGA();
        logPageView();
      }

    async componentDidMount(){
        proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        /*apiURL = 'http://54.191.109.239/FYPXpal/GetStudentInfo';*/
        var projectID = this.state.projectID;

        apiURL = 'http://54.191.109.239/xPalBackend_FYPXpal/GetProjectData?pid=' + projectID;
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
          var projectName = data.project_list.project_name;
          var projectStartDate = data.project_list.project_start_date;
          var projectEndDate = data.project_list.project_end_date;
          var projectDesc = data.project_list.project_desc;
          var projectPoster = data.project_list.project_poster;
          var projectVideoUrl = data.project_list.project_video_url;
          var projectApproved = data.project_list.project_approved_by;
          var projectImages = data.project_list.project_image_list;
          var projectMembers = data.project_list.project_member_details_list;

          this.setState({
              projectName: projectName,
              projectStartDate: projectStartDate,
              projectEndDate: projectEndDate,
              projectDesc: projectDesc,
              projectPoster: projectPoster,
              projectVideoUrl: projectVideoUrl,
              projectApproved: projectApproved,
              projectImages: projectImages,
              projectMembers: projectMembers,
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
            <title>View Project - {this.state.projectName}</title>
            <Project
                projectName={this.state.projectName}
                projectStartDate={this.state.projectStartDate}
                projectEndDate={this.state.projectEndDate}
                projectDesc={this.state.projectDesc}
                projectPoster={this.state.projectPoster}
                projectVideoUrl={this.state.projectVideoUrl}
                projectApproved={this.state.projectApproved}
                projectImages={this.state.projectImages}
                projectMembers={this.state.projectMembers}
            />
        </div>
    );
  }
}
