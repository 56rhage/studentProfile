import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import NavigationApp from '../components/NavigationApp.jsx';
import Footer from '../components/Footer.jsx';

export default class About extends Component{
  constructor(props) {
    super(props);

    this.state = {
      /*Initiate the state to have an empty array*/
      posts: []
    };
  }

  componentDidMount() {
    /*Fetching of data from subreddit
    axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)*/
    axios.get('http://54.191.109.239/FYPXpal/AmandaInfo.json')
      /*.then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });*/

      .then(data => {
        this.setState({posts: data})
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.posts}</h1>
      </div>
    );
  }
}

/*ReactDOM.render(
  <FetchDemo subreddit="reactjs"/>,
  document.getElementById('root')
);*/
