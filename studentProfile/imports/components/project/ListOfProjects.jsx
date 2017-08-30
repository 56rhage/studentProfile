import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Request from 'react-http-request';
import LinesEllipsis from 'react-lines-ellipsis';

export default class ListOfProjects extends Component{
    constructor(props) {
      super(props);

      this.state = {
          allProjects: [],
          project_id: '',
      };
    }

    componentDidMount(){
        initGA();
        logPageView();
      }

    async componentDidMount(){
        proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        /*apiURL = 'http://54.191.109.239/FYPXpal/GetStudentInfo';*/
        apiURL = 'http://54.191.109.239/xPalBackend_FYPXpal/GetProjectDisplay';
        options = {
            method: 'GET',
        };

      try{
          /*var response = await fetch(proxyUrl + apiURL, options);*/
          var response = await fetch(proxyUrl + apiURL, options);

          // response message
          var data = await response.json();
          console.log(data);
          var status = response.status;

          if (status == 200){
          // response code
          var allProjects = data.project_display;

          this.setState({
            allProjects: allProjects,
          });
          }else{
              //Handle other than success
          }
      }catch(error){
          alert(error);
      }
    }

  render(){
      var image={
            width: '280px',
            height: '400px',
      }

      return(
        <div>
            <div className="w3-cell-content">
                <div className="w3-row w3-border">
                    {this.state.allProjects.map((displayAllProjects, index) => {
                        var projectID = displayAllProjects.pid;

                        return(
                            <div className="w3-quarter w3-container" key={index}>

                                <Link to ={{
                                    //pathname: '/ViewProject',
                                    pathname: '/ViewProject/' + displayAllProjects.pid,
                                    //state: { ProjectID: displayAllProjects.pid }
                                }}>
                                    <div className="backgroundImage">
                                        <div className="centerImage">
                                            <img className="normal" src={ displayAllProjects.project_poster } alt="poster" style={image} />
                                        </div>
                                    </div>
                                    <p className="projHead" id="change">{ displayAllProjects.project_name }</p>

                                    <LinesEllipsis
                                        text={ displayAllProjects.project_desc }
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
