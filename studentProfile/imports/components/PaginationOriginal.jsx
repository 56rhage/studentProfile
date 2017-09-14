import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link, props } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class PaginationOriginal extends Component{
    render(){
        const renderPageNumbers = this.props.pageNumbers.map(number => {
          return (
            <li
                key={number}
                id={number}
                onClick={this.props.handleClick}
                className={number == this.props.currentPage ? "active" : ""}
            >
                {number}
            </li>
          );
        });

        return(
            <div className="pagination-align">
                <ul className="pagination">
                    {this.props.pageNumbers.length > 0 && <li id={this.props.leftArrow} onClick={this.props.handleClick}>&laquo;</li>}
                    {renderPageNumbers}
                    {this.props.pageNumbers.length > 0 && <li id={this.props.rightArrow} onClick={this.props.handleClick}>&raquo;</li>}
                </ul>
            </div>
        );
    }
}

{/*ReactDOM.render(<NavComponent />, document.querySelector('navbar'));*/}
