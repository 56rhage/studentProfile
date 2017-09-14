import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import Parallax from 'react-springy-parallax'

import NavigationApp from '../components/NavigationApp.jsx';
import EachFaculty from '../components/faculty/eachFaculty.jsx';
import Footer from '../components/Footer.jsx';

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

export default class AllStudents extends Component{
  constructor(props) {
    super(props);

    this.state = {
        getFacultyList: [],


        infoSecurityPosters: ['./img/Project1.jpg', './img/Project1.jpg', './img/Project1.jpg'],
        infoSecurityNames: ['Info Security Underneath', 'Info Security Underneath', 'Info Security Underneath'],
        infoSecurityDesc: ['Info Security Description', 'Info Security Description', 'Info Security Description'],
        infoSecurity: "Information Security",
        infoSecurityid: "1",
        animationArtPosters: ['./img/Project1.jpg', './img/Project1.jpg', './img/Project1.jpg'],
        animationArtNames: ['Animation Art Underneath', 'Animation Art Underneath', 'Animation Art Underneath'],
        animationArtDesc: ['Animation Art Description', 'Animation Art Description', 'Animation Art Description'],
        animationArt: "Animation Art",
        animationArtid: "2",
        financialInfoPosters: ['./img/Project1.jpg', './img/Project1.jpg', './img/Project1.jpg'],
        financialInfoNames: ['Financial Information Underneath', 'Financial Information Underneath', 'Financial Information Underneath'],
        financialInfoDesc: ['Financial Information Description', 'Financial Information Description', 'Financial Information Description'],
        financialInfo: "Financial Informatics",
        financialInfoid: "3",
        infoTechPosters: ['./img/Project1.jpg', './img/Project1.jpg', './img/Project1.jpg'],
        infoTechNames: ['Info Tech Underneath', 'Info Tech Underneath', 'Info Tech Underneath'],
        infoTechDesc: ['Info Tech Description', 'Info Tech Description', 'Info Tech Description'],
        infoTech: "Information Technology",
        infoTechid: "4",
        gameDesignPosters: ['./img/Project1.jpg', './img/Project1.jpg', './img/Project1.jpg'],
        gameDesignNames: ['Game Design Underneath', 'Game Design Underneath', 'Game Design Underneath'],
        gameDesignDesc: ['Game Design Description', 'Game Design Description', 'Game Design Description'],
        gameDesign: "Immersive Media & Game Design",
        gameDesignid: "5",
    };
  }

  componentDidMount(){
      initGA();
      logPageView();
  }

  pushProjects(){

      var facultyID = ["0", "1", "2", "3", "4"];
      var facultyTitle = ["Information Security", "Animation Art", "Financial Informatics", "Information Technology", "Immersive Media & Game Design"];

      var one0 = [
          {projectImage: './img/Project1.jpg', projectName: 'Info Security Underneath', projectDesc: 'Info Security Description'},
          {projectImage: './img/Project1.jpg', projectName: 'Info Security Underneath', projectDesc: 'Info Security Description'},
          {projectImage: './img/Project1.jpg', projectName: 'Info Security Underneath', projectDesc: 'Info Security Description'},
      ];
      var two1 = [
          {projectImage: './img/Project1.jpg', projectName: 'Animation Art Underneath', projectDesc: 'Animation Art Description'},
          {projectImage: './img/Project1.jpg', projectName: 'Animation Art Underneath', projectDesc: 'Animation Art Description'},
          {projectImage: './img/Project1.jpg', projectName: 'Animation Art Underneath', projectDesc: 'Animation Art Description'},
      ];
      var three2 = [
          {projectImage: './img/Project1.jpg', projectName: 'Financial Informatics Underneath', projectDesc: 'Financial Informatics Description'},
          {projectImage: './img/Project1.jpg', projectName: 'Financial Informatics Underneath', projectDesc: 'Financial Informatics Description'},
          {projectImage: './img/Project1.jpg', projectName: 'Financial Informatics Underneath', projectDesc: 'Financial Informatics Description'},
      ];
      var four3 = [
          {projectImage: './img/Project1.jpg', projectName: 'Information Technology Underneath', projectDesc: 'Information Technology Description'},
          {projectImage: './img/Project1.jpg', projectName: 'Information Technology Underneath', projectDesc: 'Information Technology Description'},
          {projectImage: './img/Project1.jpg', projectName: 'Information Technology Underneath', projectDesc: 'Information Technology Description'},
      ];
      var five4 = [
          {projectImage: './img/Project1.jpg', projectName: 'Immersive Media & Game Design Underneath', projectDesc: 'Immersive Media & Game Design Description'},
          {projectImage: './img/Project1.jpg', projectName: 'Immersive Media & Game Design Underneath', projectDesc: 'Immersive Media & Game Design Description'},
          {projectImage: './img/Project1.jpg', projectName: 'Immersive Media & Game Design Underneath', projectDesc: 'Immersive Media & Game Design Description'},
      ];

      facultyID.map((id) => {

          let result = one0

          switch (id) {
              case 0:
                  result = one0;
                  break;
              case 1:
                  result = two1;
                  break;
              case 2:
                  result = three2;
                  break;
              case 3:
                  result = four3;
                  break;
              case 4:
                  result = five4;
                  break;
          }

          this.state.getFacultyList.push({
              "facultyTitle": facultyTitle[id],
              "facultyID": id,
              "featuredProjects": result,
          })

          console.log(this.state.getFacultyList);
      })


  }

  render() {
      this.pushProjects()

    return (
      <div>
          <NavigationApp display={false}/>
          <br/>

          <div className="contents">
              <Parallax ref="parallax" pages={6}>
                  <EachFaculty
                      getFacultyList={this.state.getFacultyList}
                      projectPoster={this.state.infoSecurityPosters}
                      projectName={this.state.infoSecurityNames}
                      projectDesc={this.state.infoSecurityDesc}
                      projectTitle={this.state.infoSecurity}
                      facultyID={this.state.infoSecurityid}
                  />
              </Parallax>
          </div>
          <div className="clearfix"></div>
          <br />
          <Footer />
      </div>
    );
  }
}
