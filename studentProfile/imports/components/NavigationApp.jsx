import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link, props } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavigationApp extends Component{
    onKeyPress(event) {
        if (event.which === 13 /* Enter */) {
          event.preventDefault();
        }
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
                        <li><a href="/Contact">Contact Us</a></li>
                        {this.props.display &&
                            <div id="search">
                                <form method="GET" action="#">
                                    <input type="text" name="searchField" placeholder="Search" size="30" onKeyPress={this.onKeyPress} onChange={this.props.onSearchChange} />
                                </form>
                            </div>
                        }
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
                        <li><a href="/Contact" onClick={this.burgerToggle}>Contact Us</a></li>
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

{/*ReactDOM.render(<NavComponent />, document.querySelector('navbar'));*/}
