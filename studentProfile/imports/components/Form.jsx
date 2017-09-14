import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {withRouter, Link, props} from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Form extends Component {
	render() {
		return (
            <div class="container">
                <form id="contact" action="" method="post">
                    <div className="form-header-container">
                        <i className="fa fa-phone fa-3x"></i>
                        <h3 className="mainHeader student-header-text">Contact Us</h3>
                    </div>
                    <h4>Contact us today, and get reply with in 24 hours!</h4>
                    <fieldset>
                        <input placeholder="Your name" type="text" tabindex="1" required autofocus />
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your Email Address" type="email" tabindex="2" required />
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your Phone Number" type="tel" tabindex="3" required />
                    </fieldset>
                    <fieldset>
                        <textarea placeholder="Type your Message Here" tabindex="5" required></textarea>
                    </fieldset>
                    <fieldset>
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </fieldset>
                </form>
            </div>
        );
	}
}

{/*ReactDOM.render(<NavComponent />, document.querySelector('navbar'));*/
}
