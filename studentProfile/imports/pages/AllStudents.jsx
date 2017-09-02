import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import NavigationApp from '../components/NavigationApp.jsx';
import Filter from '../components/student/Filter.jsx';
import ListOfStudents from '../components/student/ListOfStudents.jsx';
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
          allStudents: [],
      };
    }

    async componentDidMount(){
        initGA();
        logPageView();

        proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        /*apiURL = 'http://54.191.109.239/FYPXpal/GetStudentInfo';*/
        apiURL = 'http://54.191.109.239/xPalBackend_FYPXpal/GetStudentDisplay';
        options = {
            method: 'GET',
        };

      try{
          /*var response = await fetch(proxyUrl + apiURL, options);*/
          var response = await fetch(proxyUrl + apiURL, options);

          // response message
          var data = await response.json();

          var status = response.status;

          if (status == 200){
          // response code
          var allStudents = data.student_display_info;
          console.log(allStudents);

          this.setState({
            allStudents: allStudents,
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
              <NavigationApp allList={this.state.allStudents}/>
              <br/>
              <div className="contentWrapper">
                  {/*<Filter />
                  <br/>*/}
                  <ListOfStudents />
              </div>
              <br />
              <Footer />
          </div>
        );
    }
}
