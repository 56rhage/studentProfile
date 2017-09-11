import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Request from 'react-http-request';
import LinesEllipsis from 'react-lines-ellipsis';
import Filter from './Filter';
import matchSorter from 'match-sorter';

export default class ListOfProjects extends Component{
    constructor(props) {
      super(props);

      this.state = {
          allProjects: [],
          project_id: '',
          searchedProject: '',
          currentState: 'ready'
      };

      this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount(){
        // initGA();
        // logPageView();
      }

    async componentWillMount(){
        if(this.state.currentState !== 'isLoading') {
                proxyUrl = 'https://cors-anywhere.herokuapp.com/';
                /*apiURL = 'http://54.191.109.239/FYPXpal/GetStudentInfo';*/
                apiURL = 'http://54.191.109.239/xPalBackend_FYPXpal/GetProjectDisplay';
                options = {
                    method: 'GET',
                };

            try {
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
                    currentState: 'Loaded'
                });
                }else{
                    //Handle other than success
                }
            } catch(error){
                this.setState({
                    currentState: 'isLoading'
                });
            }
        }
    }

  getData() {
    const { searchedProject, allProjects } = this.state;
    const searchedFields = ["project_name"];
    if (searchedProject !== "") {
      const searchResults = matchSorter(allProjects, searchedProject, { keys: searchedFields });
      return searchResults;
    }
    return allProjects;
  }

  handleSearch = (event) => {
    //   console.log("event:", event, "value:", event.target.value, "field:", field);
    this.setState({
      searchedProject: event.target.value
    });
  }

  renderFilters() {
      const { allProjects } = this.state;
      if (allProjects.length > 0) {
          return (
              <Filter
                onChange={this.handleSearch}
                value={this.state.searchedProject}
                name={"searchedProject"}
              />
          );
      }
      return null;
  }

  render(){
      var image={
            width: '280px',
            height: '400px',
            borderBottom: '1px solid'
      }

      console.log("curstate", this.state.currentState);

      const allProjects = this.getData();

      return(
        <div className="project-paginate">
            {this.renderFilters()}
            <div className="projects-cont-custom">
                <div className="project-list-custom">
                    {allProjects.map((displayAllProjects, index) => {
                        var projectID = displayAllProjects.pid;

                        return(
                            <div className="project-card" key={index}>

                                <Link to ={{
                                    //pathname: '/ViewProject',
                                    pathname: '/ViewProject/' + displayAllProjects.pid,
                                    //state: { ProjectID: displayAllProjects.pid }
                                }}>
                                    <div className="backgroundImage">
                                        <div className="centerImage">
                                            <img className="" src={ displayAllProjects.project_poster } alt="poster" style={image} />
                                        </div>
                                    </div>
                                    <p className="project-card-details" id="change">{ displayAllProjects.project_name }</p>

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
