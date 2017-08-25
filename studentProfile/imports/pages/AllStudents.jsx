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
    componentDidMount(){
        initGA();
        logPageView();
    }

    render() {
        return (
          <div>
              <NavigationApp />
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
