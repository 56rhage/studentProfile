import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import NavigationApp from '../components/NavigationApp.jsx';
import ListOfProjects from '../components/project/ListOfProjects.jsx';
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

export default class AllProjects extends Component{
    constructor(props) {
      super(props);

      this.state = {
          search: '',
      };
    }

    componentDidMount(){
        initGA();
        logPageView();
    }

    /*Method for search to call*/
    onSearchChange(value){
        this.setState({
            search: value.target.value,
        });
    }

  render() {
    return (
      <div>
          <NavigationApp onSearchChange={this.onSearchChange.bind(this)}  display={true}/>
          <br/>
          <div className="contentWrapper">
              {/*<Filter />
              <br/>*/}
              <ListOfProjects search={this.state.search}/>
          </div>
          <br />
          <Footer />
      </div>
    );
  }
}
