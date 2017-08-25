import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

import Swiper from 'react-id-swiper';

export default class FeaturedProjects extends Component{
    constructor(props) {
      super(props);

      this.state = {
          featuredProjects: [],
      };

    }

    async componentDidMount(){
        /*proxyUrl = 'https://cors-anywhere.herokuapp.com/';*/
        /*apiURL = 'http://54.191.109.239/FYPXpal/GetStudentInfo';*/
        apiURL = 'http://54.191.109.239/xPalBackend_FYPXpal/GetAllFeatured';
        options = {
            method: 'GET',
        };

      try{
          /*var response = await fetch(proxyUrl + apiURL, options);*/
          var response = await fetch(apiURL, options);

          // response message
          var data = await response.json();

          var status = response.status;

          if (status == 200){
          // response code
          var featuredProjects = data.featured_projects;
          console.log(featuredProjects);
          this.setState({
            featuredProjects: featuredProjects,
          });
          }else{
              //Handle other than success
          }
      }catch(error){
          alert(error);
      }
    }

  render() {
      const params = {
          pagination: '.swiper-pagination',
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          allowSwipeToPrev: true,
          allowSwipeToNext: true,
          loop: true,
          autoplay: 2000,
          coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : false
          }
        }

    return (
      <div id="wrap">
          <div id="header">
              <h1 className="mainHeader">Featured Projects</h1>

              <Swiper {...params}>
                  <div className="wrapper">
                      <div className="card radius"> {/*shadowDepth1*/}
                          <div className="card__image border-tlr-radius" className="centerImage">
                              <img src="./img/Project1.jpg" alt="image" className="imageStyleProject" />
                          </div>

                          <div className="card__content card__padding">
                              <article className="card__article">
                                  <h2><a href="#">Underneath</a></h2>

                                  <p>This is an outstanding project which worth your time to look through.</p>
                              </article>
                          </div>
                      </div>
                  </div>
                  
                  <div className="wrapper">
                      <div className="card radius shadowDepth1">
                          <div className="card__image border-tlr-radius" className="centerImage">
                              <img src="./img/Project1.jpg" alt="image" className="imageStyleProject" />
                          </div>

                          <div className="card__content card__padding">
                              <article className="card__article">
                                  <h2><a href="#">Firerule</a></h2>

                                  <p>Making sure that the fire will get hotter and hotter for this project</p>
                              </article>
                          </div>
                      </div>
                  </div>

                  <div className="wrapper">
                      <div className="card radius shadowDepth1">
                          <div className="card__image border-tlr-radius" className="centerImage">
                              <img src="./img/Project1.jpg" alt="image" className="imageStyleProject" />
                          </div>

                          <div className="card__content card__padding">
                              <article className="card__article">
                                  <h2><a href="#">Blow Wind Blow</a></h2>

                                  <p>It is my first attempt to be develop a new eCommerce website. Those who work in the call center line is shitty because of their actions and the attitude.</p>
                              </article>
                          </div>
                      </div>
                  </div>

                  <div className="wrapper">
                      <div className="card radius shadowDepth1">
                          <div className="card__image border-tlr-radius" className="centerImage">
                              <img src="./img/Project1.jpg" alt="image" className="imageStyleProject" />
                          </div>

                          <div className="card__content card__padding">
                              <article className="card__article">
                                  <h2><a href="#">Rock The Boat</a></h2>

                                  <p>I am a big fan of coding and this project allows students to create an application on their own.</p>
                              </article>
                          </div>
                      </div>
                  </div>
              </Swiper>

              {/*This is to ensure that the div height covers all content*/}
              <div className="clearfix"></div>
              <p className="mainLink"><a href="/AllProjects">View all Projects >></a></p>
          </div>
      </div>
    );
  }
}
