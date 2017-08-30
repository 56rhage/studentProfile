import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

import StudentCarousel from '../components/project/studentCarousel.jsx';

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
                              <img className="normal" src="https://s3-ap-southeast-1.amazonaws.com/xpal/Project/poster-1.jpg" alt="image" className="imageStyleProject" />
                          </div>

                          <div className="card__content card__padding">
                              <article className="card__article">
                                  <h2><a href="/ViewProject/1">Morphy</a></h2>
                                  <p>Morphy Project</p>
                              </article>
                          </div>
                      </div>
                  </div>

                  <div className="wrapper">
                      <div className="card radius shadowDepth1">
                          <div className="card__image border-tlr-radius" className="centerImage">
                              <img className="normal" src="https://s3-ap-southeast-1.amazonaws.com/xpal/Project/poster-1d55cd9b-8b4e-454e-8e56-523188ea96a3.png" alt="image" className="imageStyleProject" />
                          </div>

                          <div className="card__content card__padding">
                              <article className="card__article">
                                  <h2><a href="/ViewProject/1d55cd9b-8b4e-454e-8e56-523188ea96a3">Retail Banking Application Process - LifeLah</a></h2>
                                  <p>Banking Project</p>
                              </article>
                          </div>
                      </div>
                  </div>


                  <div className="wrapper">
                      <div className="card radius shadowDepth1">
                          <div className="card__image border-tlr-radius" className="centerImage">
                              <img className="normal" src="https://s3-ap-southeast-1.amazonaws.com/xpal/Project/poster-2.jpg" alt="image" className="imageStyleProject" />
                          </div>

                          <div className="card__content card__padding">
                              <article className="card__article">
                                  <h2><a href="/ViewProject/2">Pain-X</a></h2>
                                  <p>Pain Project</p>
                              </article>
                          </div>
                      </div>
                  </div>


                  <div className="wrapper">
                      <div className="card radius shadowDepth1">
                          <div className="card__image border-tlr-radius" className="centerImage">
                              <img className="normal" src="https://s3-ap-southeast-1.amazonaws.com/xpal/Project/poster-2c3158ab-1d25-4c91-af06-4618f6854798.png" alt="image" className="imageStyleProject" />
                          </div>

                          <div className="card__content card__padding">
                              <article className="card__article">
                                  <h2><a href="/ViewProject/2c3158ab-1d25-4c91-af06-4618f6854798">Escape</a></h2>
                                  <p>Escape Project</p>
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
