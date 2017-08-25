import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Request from 'react-http-request';
import LinesEllipsis from 'react-lines-ellipsis';

export default class ListOfStudents extends Component{
    constructor(props) {
      super(props);

      this.state = {
          allStudents: [],
          student_id: '',
      };

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
          console.log(data.student_display_info);
          var status = response.status;

          if (status == 200){
          // response code
          var allStudents = data.student_display_info;

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

  render(){
    return(
      <div>
          <div className="w3-cell-content">
              <div className="w3-row w3-border">
                  {this.state.allStudents.map((displayAllStudents, index) => {
                      var studentID = displayAllStudents.student_id;

                      return(
                          <div className="w3-quarter w3-container" key={index}>

                              <Link to ={{
                                  //pathname: '/ViewStudent',
                                  pathname: '/ViewStudent/' + displayAllStudents.student_id,
                                  //state: { StudentID: displayAllStudents.student_id }
                              }}>
                                  <div className="backgroundImage">
                                      <div className="centerImage">
                                          {displayAllStudents.student_photo == "" || displayAllStudents.student_photo == "null" || displayAllStudents.student_photo == null ?
                                              <img src="../img/user.png" alt={displayAllStudents.student_name} className="imageStyle" />
                                          :
                                          <img src={displayAllStudents.student_photo} alt={displayAllStudents.student_name} className="imageStyle" />
                                          }
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
                      )
                  })

                  }
              </div>
          </div>

          <div className="clearfix"></div>
      </div>
    );
  }
}
