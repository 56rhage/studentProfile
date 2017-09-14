import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Request from 'react-http-request';
import LinesEllipsis from 'react-lines-ellipsis';

import Pagination from '../PaginationStudent.jsx';
import NavigationApp from '../NavigationApp.jsx';
import Footer from '../Footer.jsx';

function searchingFor(term){
    return function(x){
        return x.course_name.toLowerCase().includes(term.toLowerCase()) || x.student_name.toLowerCase().includes(term.toLowerCase()) || x.student_desc.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class student extends React.Component {
    constructor() {
        super();

        // an example array of items to be paged
        var exampleItems = _.range(1, 151).map(i => { return { id: i, name: 'Item ' + i }; });

        this.state = {
            allStudents: [],
            exampleItems: exampleItems,
            pageOfItems: [],
            term: '',
            loading: true,
            search: '',
        };

        this.searchHandler = this.searchHandler.bind(this);
        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }

    searchHandler(event){
        this.setState({ term: event.target.value });
    }

    /*Method for search to call*/
    onSearchChange(value){
        this.setState({
            search: value.target.value,
        });
    }

    async componentDidMount(){

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
          //console.log(allStudents);

          this.setState({
            allStudents: allStudents,
          });
          }else{
              //Handle other than success
          }
      }catch(error){
          alert(error);
      }

      if(allStudents.length > 0){
          console.log("Printing...");
          this.setState({
              loading: false,
          });
      }
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        if(this.state.loading){
            return (
                <div>
                    <NavigationApp onSearchChange={this.onSearchChange.bind(this)}  display={true}/>
                    <br/>
                    <h2>Loading ...</h2>
                    <br/>
                    <Footer />
                </div>
            );
        }

        return (
            <div>
                <NavigationApp onSearchChange={this.onSearchChange.bind(this)}  display={true}/>
                <br/>

                <div className="w3-cell-content">
                    <div className="w3-row w3-border">
                        {this.state.pageOfItems.map(displayAllStudents =>
                            <div className="w3-quarter w3-container" key={displayAllStudents.student_id}>
                                <Link to ={{
                                        //pathname: '/ViewStudent',
                                        pathname: '/ViewStudent/' + displayAllStudents.student_id,
                                        //state: { StudentID: displayAllStudents.student_id }
                                }}>
                                    <div className="backgroundImage">
                                        <div className="centerImage">
                                            {displayAllStudents.student_photo == "" || displayAllStudents.student_photo == "null" || displayAllStudents.student_photo == null ?
                                                <img className="normal" src="../img/user.png" alt={displayAllStudents.student_name} className="imageStyle" />
                                            :
                                            <img className="normal" src={displayAllStudents.student_photo} alt={displayAllStudents.student_name} className="imageStyle" />
                                            }
                                            {/*<div key={item.student_id}>{item.student_name}</div>*/}
                                        </div>
                                    </div>

                                    <p className="projHead" id="change">{ displayAllStudents.student_name }</p>

                                    <p>{displayAllStudents.course_id} - {displayAllStudents.course_name}</p>

                                    <LinesEllipsis
                                        text={ displayAllStudents.student_desc }
                                        maxLine='3'
                                        ellipsis='...'
                                        trimRight
                                        basedOn='letters'
                                    />

                                </Link>
                            </div>
                        )}

                        <Pagination items={this.state.allStudents} onChangePage={this.onChangePage} term={this.state.term} />

                    </div>
                </div>

                <div className="clearfix" />
                <br/>
                <Footer />
            </div>
        );
    }
}

export default student;
