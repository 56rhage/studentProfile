import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

import Swiper from 'react-id-swiper';
import LinesEllipsis from 'react-lines-ellipsis';

export default class FeaturedStudents extends Component{
    constructor(props) {
      super(props);

      this.state = {
          featuredStudents: [],
      };

    }

    async componentDidMount(){
        proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        /*apiURL = 'http://54.191.109.239/FYPXpal/GetStudentInfo';*/
        apiURL = 'http://54.191.109.239/xPalBackend_FYPXpal/GetAllFeatured';
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
          var featuredStudents = data.feautured_students;

          this.setState({
            featuredStudents: featuredStudents,
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

        var imageStyle = {
           width: 200,
           height: 200,
           borderRadius: '50%',
       };

       var centerImage = {
           display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
       }

    return (
      <div id="wrap">
          <div id="header">
              <h1 className="mainHeader">Featured Students</h1>

              <Swiper {...params}>
                  <div className="wrapper">
                      <div className="card radius"> {/*shadowDepth1*/}
                          <div className="card__image border-tlr-radius" style={centerImage}>
                              <img src="https://s3-ap-southeast-1.amazonaws.com/xpal/Student/25346.png" alt="image" style={imageStyle} />
                          </div>
                          <div className="card__content card__padding">
                              <article className="card__article">
                                  <h2><a href="/ViewStudent/25346">Amanda</a></h2>
                                  <LinesEllipsis
                                      text="My specialty is my writing. Storyboarding and scriptwriting are my strengths, and I love public speaking as well as interacting and connecting with people. Leverage, to me, is highly important."
                                      maxLine='3'
                                      ellipsis='...'
                                      trimRight
                                      basedOn='letters'
                                  />
                              </article>
                          </div>
                      </div>
                  </div>

                  <div className="wrapper">
                      <div className="card radius shadowDepth1">
                          <div className="card__image border-tlr-radius" style={centerImage}>
                              <img src="https://s3-ap-southeast-1.amazonaws.com/xpal/Student/25359.png" alt="image" style={imageStyle} />
                          </div>
                          <div className="card__content card__padding">
                              <article className="card__article">
                                  <h2><a href="/ViewStudent/25359">crystal</a></h2>
                                  <LinesEllipsis
                                      text="I am a keen learner willing to try and explore new knowledge when I am given the chance. I am in a course whereby I learned Financial and Information Technology which enables me to use the skills that I have learnt to apply on problems I might face. Knowledge and skills will not decrease but will keep increase as time goes by throughout my entire life. I am able to work in a team to get things done faster."
                                      maxLine='3'
                                      ellipsis='...'
                                      trimRight
                                      basedOn='letters'
                                  />
                              </article>
                          </div>
                      </div>
                  </div>

                  <div className="wrapper">
                      <div className="card radius shadowDepth1">
                          <div className="card__image border-tlr-radius" style={centerImage}>
                              <img src="https://s3-ap-southeast-1.amazonaws.com/xpal/Student/25645.png" alt="image" style={imageStyle} />
                          </div>
                          <div className="card__content card__padding">
                              <article className="card__article">
                                  <h2><a href="/ViewStudent/25645">carissa</a></h2>
                                  <LinesEllipsis
                                      text="Being in the forensic field is a true passion of mine.My specialization is under Information Security \u0026 Forensics. The reason why I choose this field is because I am very interested in Forensics due to the nature of the job. Being an intern as a Forensic Examiner under Nexia have taught me a lot about the Forensic field. I look forward to applying what I have learnt from this experience when I go out to work in the forensic field in the future."
                                      maxLine='3'
                                      ellipsis='...'
                                      trimRight
                                      basedOn='letters'
                                  />
                              </article>
                          </div>
                      </div>
                  </div>

                  <div className="wrapper">
                      <div className="card radius shadowDepth1">
                          <div className="card__image border-tlr-radius" style={centerImage}>
                              <img src="https://s3-ap-southeast-1.amazonaws.com/xpal/Student/25183.png" alt="image" style={imageStyle} />
                          </div>
                          <div className="card__content card__padding">
                              <article className="card__article">
                                  <h2><a href="/ViewStudent/25183">ziquan</a></h2>
                                  <LinesEllipsis
                                      text="Developing and delivering impressive Digital Advertisement for Citibank to dispatch to their potential clients. I have clear understanding of Citibank digital advertisement guideline. I choose Information Sales and Marketing specialization because marketing is my passion.\n\nAs an Information Systems sophomore from Singapore Management University majoring in Information Systems and Second Major in Analytics (Without Track). I am very much interested in Cyber Security, Database Management and Analytics. \n\nI have passion in learning new things. I picked up Cyber Security on my own and participated in several competitions. In additional, I have leadership experience in my Volunteering Organisation and University. \n\nI believe in doing great things to change the world. But changing the world is a difficult task ~ it begins from changing yourself."
                                      maxLine='3'
                                      ellipsis='...'
                                      trimRight
                                      basedOn='letters'
                                  />
                              </article>
                          </div>
                      </div>
                  </div>
              </Swiper>


              {/*This is to ensure that the div height covers all content*/}
              <div className="clearfix"></div>
              <p className="mainLink"><a href="/AllStudents">View all students >></a></p>
          </div>
      </div>
    );
  }
}
