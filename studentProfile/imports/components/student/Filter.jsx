import React, { Component } from 'react';

export default class Filter extends Component{

    constructor(props) {
      super(props);

      this.state = {
          term: '',
      };

      this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event){
        this.setState({ term: event.target.value })
    }

  render(){
    return(
      <div className="w3.container w3-cell-filter">
          <h2 className="header2">Filter Students{/*<i className="fa fa-angle-double-left rightAlignArrow"></i>*/}</h2>
          <div className="eachFilter">
              <form action="#" method="POST">
                  <h3>Academy Year</h3><hr />
                  <input type="checkbox" name="academicYear" value="Year 1" />Year 1<br/>
                  <input type="checkbox" name="academicYear" value="Year 2" />Year 2<br/>
                  <input type="checkbox" name="academicYear" value="Year 3" />Year 3<br/>
                  <input type="checkbox" name="academicYear" value="Year 4" />Year 4<br/>
              </form>
          </div>
          <div className="eachFilter">
              <form>
                  <h3>Faculty</h3><hr />
                  <input type="checkbox" name="academicYear" value="Diploma in Animation & 3D Arts" />Diploma in Animation & 3D Arts<br/>
                  <input type="checkbox" name="academicYear" value="Diploma in Financial Informatics" />Diploma in Financial Informatics<br/>
                  <input type="checkbox" name="academicYear" value="Diploma in Game Design" />Diploma in Game Design<br/>
                  <input type="checkbox" name="academicYear" value="Diploma in Inforamtion Technology" />Diploma in Inforamtion Technology<br/>
                  <input type="checkbox" name="academicYear" value="Arts Business Management" />Arts Business Management<br/>
              </form>
          </div>
      </div>
    );
  }
}
