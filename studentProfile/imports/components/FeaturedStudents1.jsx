import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

/*import Slider from 'react-slick';*/

import Swiper from 'react-id-swiper';

export default class FeaturedStudents extends Component{
  render() {

    /*var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      centerPadding: '12px'
    };

    var style = {
        width: {
            value: '20%',
            important: 'true'
        }
    };*/

    return (
      <div id="wrap">
          <div id="header">
              <h1 className="mainHeader">Featured Students</h1>

              <Swiper>
                  <div>Slide 1</div>
                  <div>Slide 2</div>
                  <div>Slide 3</div>
                  <div>Slide 4</div>
                  <div>Slide 5</div>
              </Swiper>

              {/*<Coverflow width="960" height="500"
                  displayQuantityOfSide={2}
                  navigation={false}
                  enableScroll={true}
                  clickable={true}
                  active={0}
              >
                  <img className="normal" src='image/path' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
                  <img className="normal" src='image/path' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
              </Coverflow>

              <div id="container">

                  <Slider {...settings}>


                      <div className="item" style="width: 20%">
                  <div className="item-img img-circle">
                  <img className="normal" src="./img/profile.jpg" alt="poster" className="image" />
                  </div>
                  <div className="item-desc">
                  <p className="item-heading">Crystal Chiok</p>
                  <p>A short description here</p>
                  <a href="#">Read More</a>
                  </div>
                      </div>

                      <div className="item">
                  <div className="item-img img-circle">
                  <img className="normal" src="./img/profile.jpg" alt="poster" className="image" />
                  </div>
                  <div className="item-desc">
                  <p className="item-heading">Improve Your Life With Salad</p>
                  <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root
                  water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.</p>
                  <a href="#">Read More</a>
                  </div>
                      </div>


                      <div className="item">
                  <div className="item-img img-circle">
                  <img className="normal" src="./img/profile.jpg" alt="poster" className="image" />
                  </div>
                  <div className="item-desc">
                  <p className="item-heading">Ten Reasons Salad Is the Best</p>
                  <p>
                  Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach
                  fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts
                  nori azuki bean chickweed potato bell pepper artichoke. Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                  </p>
                  <a href="#">Read More</a>
                  </div>
                      </div>

                      <div className="item">
                  <div className="item-img img-circle">
                  <img className="normal" src="./img/profile.jpg" alt="poster" className="image" />
                  </div>
                  <div className="item-desc">
                  <p className="item-heading">Lettuce, Why its Important</p>
                  <p>
                  Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi
                  rutabaga tigernut.
                  </p>
                  <a href="#">Read More</a>
                  </div>
                      </div>

                  </Slider>
                  </div>
              </div>*/}

              {/*<div className="w3-container">
                  <h2>Mobile First Responsiveness</h2>
                    <p className="w3-large">Try to resize the window!</p>
              </div>*/}

              {/*<div className="w3-row w3-border outer-div">
                    <div className="w3-quarter w3-container inner-div">
                  <p className="img-circle"><img className="normal" src="./img/profile.jpg" alt="poster" className="image" /></p>
                  <p className="projHead">Crystal Chiok</p>
                  <p>A short description here A short description here A short description here A short description here A short description here A short description here A short description here A short description here A short description here A short description here</p>
                    </div>
                    <div className="w3-quarter w3-container inner-div">
                  <p className="img-circle"><img className="normal" src="./img/profile.jpg" alt="poster" className="image" /></p>
                  <p className="projHead">Amanda Quek</p>
                  <p>A short description here</p>
                    </div>
                    <div className="w3-quarter w3-container inner-div">
                  <p className="img-circle"><img className="normal" src="./img/profile.jpg" alt="poster" className="image" /></p>
                  <p className="projHead">Lau Zi Quan</p>
                  <p>A short description here</p>
                    </div>
                    <div className="w3-quarter w3-container inner-div">
                  <p className="img-circle"><img className="normal" src="./img/profile.jpg" alt="poster" className="image" /></p>
                  <p className="projHead">Lee Boon Sing</p>
                  <p>A short description here</p>
                    </div>
              </div>*/}

              {/*This is to ensure that the div height covers all content*/}
              <div className="clearfix"></div>
              <p className="mainLink"><a href="#">View all students >></a></p>
          </div>
      </div>
    );
  }
}
