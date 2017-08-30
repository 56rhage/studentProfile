import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link, props } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavigationApp extends Component{

    constructor(props) {
      super(props);

      this.state = {
          fullList: [],
      };

    }

    componentDidUpdate(){
        if (this.state.fullList == ""){
            this.setState({
                fullList: this.props.allList,
            })
        }
    }

    filterList(event){
        console.log(this.state.fullList);
        var updatedList = this.state.fullList;

        updatedList = updatedList.filter(function(item){
          return item.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });

        this.setState({fullList: updatedList});
    }

    render(){
        return(
            <nav>
                <div className="navWide">
                    <ul className="clearfix">
                        <li><a href="/"><img className="logo" id="main-img" src="/img/Ngee Ann Logo.jpg" /></a></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/About">About</a></li>
                        <li><a href="/AllStudents">Student</a></li>
                        <li><a href="/AllProjects">Project</a></li>
                        <li><a href="/AllFaculty">Faculty</a></li>
                        <div id="search">
                            <form method="GET" action="#">
                                <input type="text" name="searchField" placeholder="Search" size="30" onChange={this.filterList} />
                            </form>
                        </div>
                    </ul>
                </div>
                <div className="navNarrow">
                    <img className="logo" src="/img/Ngee Ann Logo.jpg" />
                    <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
                    <ul className="clearfix narrowLinks">
                        <li><a href="/" onClick={this.burgerToggle}>Home</a></li>
                        <li><a href="/About" onClick={this.burgerToggle}>About</a></li>
                        <li><a href="/AllStudents" onClick={this.burgerToggle}>Student</a></li>
                        <li><a href="/AllProjects" onClick={this.burgerToggle}>Project</a></li>
                        <li><a href="/AllFaculty" onClick={this.burgerToggle}>Faculty</a></li>
                    </ul>
                </div>
            </nav>
        );
    }

    burgerToggle() {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}
}

NavigationApp.propTypes = {
    allList: React.PropTypes.array,
};

{/*ReactDOM.render(<NavComponent />, document.querySelector('navbar'));*/}
