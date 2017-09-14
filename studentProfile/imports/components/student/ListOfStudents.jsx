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
        return x.course_name.toLowerCase().includes(term.toLowerCase()) || x.student_name.toLowerCase().includes(term.toLowerCase()) || x.student_desc.toLowerCase().includes(term.toLowerCase()) || x.course_id.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

export default class ListOfStudents extends Component{

    constructor(props) {
      super(props);

      this.state = {
          allStudents: [],
          getStudents: [],
          student_id: '',
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
        /*const retrieveStudents = this.state.allStudents.filter(searchingFor(event.target.value)).length != this.state.getStudents.length ? this.state.allStudents.filter(searchingFor(event.target.value)) : this.state.allStudents;*/

        this.setState({
            term: event.target.value,
            getStudents: this.state.allStudents.filter(searchingFor(event.target.value)),
        });
    }

    handleClick(event){
        this.setState({ currentPage: Number(event.target.id) });
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    componentWillReceiveProps(newSearch){
        this.setState({
            term: newSearch.search,
            getStudents: this.state.allStudents.filter(searchingFor(newSearch.search)),
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
          var getStudents = data.student_display_info;

          console.log(allStudents);

          this.setState({
            allStudents: allStudents,
            getStudents: getStudents,
          });
          }else{
              //Handle other than success
          }
      }catch(error){
          alert(error);
      }

      if(allStudents.length > 0){
          this.setState({
              loading: false,
          });
      }
    }

  render(){
      const {term, allStudents, getStudents, pageOfItems, loading} = this.state;

      var filter = {
          textAlign: 'center',
      }

      var eachButton = {
          borderTop: 'solid 1px #000',
          borderBottom: 'solid 1px #000',
          borderRight: 'none',
          borderLeft: 'none',
          textColor: '#000',
          backgroundColor: '#fff',
          padding: '5px 13px',
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
          <div style={filter}>
              <form id="filter">
                  <button type="button" onClick={this.searchHandler} class="focus" value="" style={eachButton}>All</button>
                  <button type="button" onClick={this.searchHandler} class="focus" value="Diploma in Information Security & Forensics" style={eachButton}>Information Security & Forensics</button>
                  <button type="button" onClick={this.searchHandler} class="focus" value="Diploma in Animation & 3D Arts" style={eachButton}>Animation & 3D Arts</button>
                  <button type="button" onClick={this.searchHandler} class="focus" value="Diploma in Financial Informatics" style={eachButton}>Financial Informatics</button>
                  <button type="button" onClick={this.searchHandler} class="focus" value="Diploma in Information Technology" style={eachButton}>Information Technology</button>
                  <button type="button" onClick={this.searchHandler} class="focus" value="Diploma in Immersive Media & Game Design" style={eachButton}>Immersive Media & Game Design</button>
              </form>
          </div>

          <div className="w3-cell-content">
              <div className="w3-row w3-border">
                  {pageOfItems.filter(searchingFor(term)).map(displayAllStudents =>
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

                  <Pagination items={getStudents} onChangePage={this.onChangePage} term={term} />

              </div>
          </div>

          <div className="clearfix"></div>
      </div>
    );
  }
}

ListOfStudents.PropTypes = {
    search: PropTypes.string.isRequired,
}
