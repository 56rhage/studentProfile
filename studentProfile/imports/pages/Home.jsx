import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import Slider from '../components/ImageSlider.jsx';
import NavigationApp from '../components/NavigationApp.jsx';
import Slideshow from '../components/Slideshow.jsx';
import PrincipleMsg from '../components/PrincipleMsg.jsx';
import FeaturedStudents from '../components/FeaturedStudents.jsx';
import FeaturedProjects from '../components/FeaturedProjects.jsx';
import Footer from '../components/Footer.jsx';
import ReactGA from 'react-ga';

export const initGA = () => {
  console.log('GA init');
  ReactGA.initialize('UA-101967047-1');
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname});
  ReactGA.pageview(window.location.pathname);
}

  const students = [];

export default class Home extends Component{
    constructor(){
      super();
      this.state = {
        featuredStudents: [],
        featuredProjects: []
      }
    }

    async componentWillMount(){
        initGA();
        logPageView();
        /*proxyUrl = 'https://cors-anywhere.herokuapp.com/';*/
        /*apiURL = 'http://54.191.109.239/FYPXpal/GetStudentInfo';*/
        const apiURL = 'http://54.191.109.239/xPalBackend_FYPXpal/GetAllFeatured';
        options = {
            method: 'GET',
        };

      try {
          const response = await fetch(apiURL, options);

          // response message
          const data = await response.json();

          const status = response.status;
          if (status === 200){

            // response code
            const featuredProjects = data.featured_projects;
            const featuredStudents = data.feautured_students;

            this.setState({
              featuredProjects,
              featuredStudents
            });
          } else {
              throw new Error(response.statusText);
          }
      } catch(error){
          alert(error);
      }
    }


  render() {
	var profileImg = './img/profile.jpg';
	var profileImg1 = './img/Project1.jpg';
  const { featuredProjects, featuredStudents } = this.state;

    return (
      <div>
          <NavigationApp />
          <br/>
          {/*<Slider />*/}
          <Slideshow />
          <br/>
          <PrincipleMsg />
          <br/>
          <FeaturedStudents students={featuredStudents}/>
          <br/>
          <FeaturedProjects projects={featuredProjects}/>
          <br/>
          <Footer />
      </div>
    );
  }
}
