import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';
import { Route } from 'react-router';

import NavigationApp from '../../components/NavigationApp.jsx';
import Footer from '../../components/Footer.jsx';

import Education from '../student/education.jsx';
import Work from '../student/work.jsx';
import CommunityService from '../student/communityService.jsx';
import Skillsets from '../student/skillsets.jsx';
import ProjectCarousel from '../project/projectCarousel.jsx';

import Swiper from 'react-id-swiper';
import { Line, Circle } from 'rc-progress';

const people = [
    {
        id: 1,
        first: "Sarah",
        last: "Johnson",
        age: 25
    },
    {
        id: 2,
        first: "Caldwel",
        last: "Thomson",
        age: 32
    },
    {
        id: 3,
        first: "Hart",
        last: "Maynard",
        age: 12
    },
    {
        id: 4,
        first: "Demetrius",
        last: "McGregor",
        age: 55
    },
]

function searchingFor(term){
    return function(x){
        return x.first.includes(term) || !term;
    }
}

export default class handleViewStudent extends Component{

  constructor(props) {
    super(props);

    this.state = {
        people: people,
        term: '',
    };

    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event){
      this.setState({ term: event.target.value })
  }

  render(){
      const {term, people} = this.state;

    return (
        <div>
            <NavigationApp />
            <br/>

            <div>
                <form>
                    <button type="button" onClick={this.searchHandler} value="">All</button>
                    <button type="button" onClick={this.searchHandler} value="Sa">Sa</button>
                    <button type="button" onClick={this.searchHandler} value="Ca">Ca</button>
                </form>

                {
                    people.filter(searchingFor(term)).map(person => {
                        return(
                            <div key={person.id}>
                                <h1>{person.first}</h1>
                                <h1>{person.last}</h1>
                                <h3>{person.age}</h3>
                            </div>
                        )
                    }
                    )
                }
            </div>

            <br/>
            <Footer />
        </div>
        );

    }

}
