import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import NavigationApp from '../components/NavigationApp.jsx';
import ListOfStudents from '../components/student/ListOfStudents.jsx';
import Pagination from '../components/Pagination.jsx';
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
          search: '',
          listOfStudent: [],
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

    /*Method for pagination to call
    onPaginationChange(value){
        this.setState({
            listOfStudent: value.target.value,
        });
    }*/

    render() {
        return (
          <div>
              <NavigationApp onSearchChange={this.onSearchChange.bind(this)}  display={true}/>
              <br/>
              <div className="contentWrapper">
                  {/*<Filter />
                  <br/>*/}
                  <ListOfStudents search={this.state.search}/>
              </div>
              <br />
              {/*<Pagination />
              <br/>*/}
              <Footer />
          </div>
        );
    }
}
