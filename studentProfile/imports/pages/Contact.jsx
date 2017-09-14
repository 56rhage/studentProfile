import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import NavigationApp from '../components/NavigationApp.jsx';
import Form from '../components/Form.jsx'
import Footer from '../components/Footer.jsx';

export const initGA = () => {
  console.log('GA init');
  ReactGA.initialize('UA-101967047-1');
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname});
  ReactGA.pageview(window.location.pathname);
}

export default class Contact extends Component{
  render() {
    return (
      <div>
          <NavigationApp display={false}/>
          <br/>
          <Form />
          <br/>
          <Footer />
      </div>
    );
  }
}
