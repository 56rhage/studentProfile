import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';
import Request from 'react-http-request';

import ViewStudent from '../pages/ViewStudent.jsx';

export default class About2 extends Component{
  constructor(props) {
    super(props);

    this.state = {
      s_id: '',
      username: '',
      name: '',
    };
  }

  async componentDidMount(){
      proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      apiURL = 'http://54.191.109.239/FYPXpal/AmandaInfo';
      options = {
          method: 'GET',
      };

    try{
        var response = await fetch(proxyUrl + apiURL, options);

        // response message
        var data = await response.json();

        var status = response.status;

      if (status == 200){
        // response code
        var username = data.student.username;
        var s_id = data.student.student_id;
        var name = data.student.student_name;

        this.setState({
          s_id: s_id,
          username: username,
          name: name
        });

      }else{
          //handle error
      }
    }catch(error){
        alert(error);
    }
}

      render() {

        return (
            <div>
                <title>Login</title>
                {this.state.name}
            </div>
        );
      }
}
