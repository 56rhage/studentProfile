import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

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

  render() {

    return (
      <div>
          <NavigationApp />
          <br/>
          <div className="contents">
              <EachFaculty
                  projectPoster={this.state.infoSecurityPosters}
                  projectName={this.state.infoSecurityNames}
                  projectDesc={this.state.infoSecurityDesc}
                  projectTitle={this.state.infoSecurity}
                  facultyID={this.state.infoSecurityid}
              />
              <br/>
              <EachFaculty
                  projectPoster={this.state.animationArtPosters}
                  projectName={this.state.animationArtNames}
                  projectDesc={this.state.animationArtDesc}
                  projectTitle={this.state.animationArt}
                  facultyID={this.state.animationArtid}
              />
              <br/>
              <EachFaculty
                  projectPoster={this.state.financialInfoPosters}
                  projectName={this.state.financialInfoNames}
                  projectDesc={this.state.financialInfoDesc}
                  projectTitle={this.state.financialInfo}
                  facultyID={this.state.financialInfoid}
              />
              <br/>
              <EachFaculty
                  projectPoster={this.state.infoTechPosters}
                  projectName={this.state.infoTechNames}
                  projectDesc={this.state.infoTechDesc}
                  projectTitle={this.state.infoTech}
                  facultyID={this.state.infoTechid}
              />
              <br/>
              <EachFaculty
                  projectPoster={this.state.gameDesignPosters}
                  projectName={this.state.gameDesignNames}
                  projectDesc={this.state.gameDesignDesc}
                  projectTitle={this.state.gameDesign}
                  facultyID={this.state.gameDesignid}
              />
          </div>
          <br />
          <Footer />
      </div>
    );
  }
}
