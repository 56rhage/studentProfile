import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Request from 'react-http-request';
import LinesEllipsis from 'react-lines-ellipsis';

import Pagination from '../Pagination.jsx';

function searchingFor(term){
    return function(x){
        return x.project_name.toLowerCase().includes(term.toLowerCase()) || x.project_desc.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

export default class ListOfProjects extends Component{
    constructor(props) {
      super(props);

      this.state = {
          allProjects: [],
          getProjects: [],
          project_id: '',
          term: '',
          pageOfItems: [],
          loading: true,
      };

      this.searchHandler = this.searchHandler.bind(this);
      this.handleClick = this.handleClick.bind(this);
      // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
      this.onChangePage = this.onChangePage.bind(this);

    }

    searchHandler(event){
        this.setState({
            term: event.target.value,
            getProjects: this.state.allProjects.filter(searchingFor(event.target.value)),
        })
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    handleClick(event){
        this.setState({ currentPage: Number(event.target.id) });
    }

    componentWillReceiveProps(newSearch){
        this.setState({
            term: newSearch.search,
            getProjects: this.state.allProjects.filter(searchingFor(newSearch.search)),
        });
    }

    componentDidMount(){
        initGA();
        logPageView();
      }

    async componentDidMount(){
        //proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        /*apiURL = 'http://54.191.109.239/FYPXpal/GetStudentInfo';*/
        apiURL = 'http://54.191.109.239/xPalBackend_FYPXpal/GetProjectDisplay';
        options = {
            method: 'GET',
        };

      try{
          /*var response = await fetch(proxyUrl + apiURL, options);*/
          var response = await fetch(apiURL, options);

          // response message
          var data = await response.json();
          console.log(data);
          var status = response.status;

          if (status == 200){
          // response code
          var allProjects = data.project_display;
          var getProjects = data.project_display;

          this.setState({
            allProjects: allProjects,
            getProjects: getProjects,
          });
          }else{
              //Handle other than success
          }
      }catch(error){
          alert(error);
      }

      if(allProjects.length > 0){
          this.setState({
              loading: false,
          });
      }
    }

  render(){
      const {term, allProjects, getProjects, pageOfItems, loading} = this.state;

      var image={
            width: '280px',
            height: '400px',
      }

      if(loading){
          return (
              <div className="alignPageCenter">
                  <span className="custom-loader">
                      <i className="fa fa-spinner fa-spin fa-5x"></i>
                  </span>
              </div>
          );
      }

      return(
        <div>
            <div className="w3-cell-content">
                <div className="w3-row w3-border">
                    {pageOfItems.filter(searchingFor(term)).map((displayAllProjects, index) => {
                        /*{this.state.allProjects.map((displayAllProjects, index) => {*/
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

                    <Pagination items={getProjects} onChangePage={this.onChangePage} term={term} />

                </div>
            </div>

            <div className="clearfix"></div>
        </div>
      );
  }
}
