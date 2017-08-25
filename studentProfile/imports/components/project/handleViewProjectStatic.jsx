import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';
import Gallery from 'react-grid-gallery';
import Swiper from 'react-id-swiper';

import NavigationApp from '../../components/NavigationApp.jsx';
import Footer from '../../components/Footer.jsx';

export default class handleViewProject extends Component{

    constructor () {
    		super();
    }

  render(){
    const IMAGES =
    [{
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    }]

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
          slideShadows : true
        }
      }

    var imageStyle = {
        width: 200,
        height: 200,
        borderRadius: '50%',
        paddingLeft: '20px',
        paddingRight: '20px',
    }

    var centerImage = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    var imageSizeLandscape = {
      width: '100%',
      maxWidth: '500px',
    }

    var imageSizePortrait = {
      height: '100%',
      maxHeight: '300px',
    }

    var alignCenter = {
        textAlign: 'center',
        alignContent: 'center',
    }

    var header = {
        marginTop: '0.83em',
        marginBottom: '0.83em',
    }

    var lineSpacing = {
        lineHeight: '1.6',
        letterSpacing: 'normal',
    }

    var profileImg = './img/profile.jpg';
    var project = './img/Project1.jpg';
    var banner = './img/Banner1.jpg';

    return (
        <div>
            <NavigationApp />
            <br/>

            <div style={alignCenter}>
                <h1 style={header}>Underneath</h1>

                { project.offsetWidth > project.offsetHeight ?
                  <div id="wrap">
                    <img src={project} alt="poster" style={imageSizeLandscape}/>
                  </div>
                :
                <div className="container-fluid">
          				<div className="row">
          					<div className="col-xs-5 projAlignRight"><img src={project} alt="poster" style={imageSizePortrait}/></div>
                        <div className="col-xs-5 projAlignLeft">
                          <h1>Details</h1>
                          Start Date: 24th August 2017
                          <br/>
                          End Date: 24th August 2018
    						        </div>
          					</div>
                  </div>
                }
                <hr/>

                <div id="wrap" style={lineSpacing}>
                    <p className="indiProject">
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                        ​                       <br/><br/>
                        This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
                    </p>
                </div>
                <hr/>

                { project.offsetWidth > project.offsetHeight ?
                  <div>
                    <div id="wrap">
                        <h1 className="mainHeader">Details</h1>
                        <p className="indiStudent">
                            Start Date: 24th August 2017
                            <br/>
                            End Date: 24th August 2018
                        </p>
                    </div>
                    <hr/>
                  </div>
                : ""
                }

                <div id="wrap">
                    <h1 className="mainHeader">Gallery</h1>
                    <Gallery
                      images={IMAGES}
                      enableImageSelection={false}
                    />

                    {/*This is to ensure that the div height covers all content*/}
                    <div className="clearfix"></div>
                </div>
                <hr/>
                <div id="wrap">
                    <h1 className="mainHeader">Team Member</h1>
                    <p className="indiProject">
                      <Swiper {...params}>
                          <div className="wrapper">
                              <div className="card radius"> {/*shadowDepth1*/}
                                  <div className="card__image border-tlr-radius" style={centerImage}>
                                      <img src="./img/profile.jpg" alt="image" style={imageStyle} />
                                  </div>

                                  <div className="card__content card__padding">
                                      <article className="card__article">
                                          <h2><a href="#">Crystal Chiok</a></h2>

                                          <p>Hi, my name is Crystal from Ngee Ann Polytechnic.</p>
                                      </article>
                                  </div>
                              </div>
                          </div>

                          <div className="wrapper">
                              <div className="card radius shadowDepth1">
                                  <div className="card__image border-tlr-radius" style={centerImage}>
                                      <img src="./img/profile.jpg" alt="image" style={imageStyle} />
                                  </div>

                                  <div className="card__content card__padding">
                                      <article className="card__article">
                                          <h2><a href="#">Lee Boon Sing</a></h2>

                                          <p>Hi, my name is Boon Sing from Ngee Ann Polytechnic. I love to code and I code all day and night.</p>
                                      </article>
                                  </div>
                              </div>
                          </div>

                          <div className="wrapper">
                              <div className="card radius shadowDepth1">
                                  <div className="card__image border-tlr-radius" style={centerImage}>
                                      <img src="./img/profile.jpg" alt="image" style={imageStyle} />
                                  </div>

                                  <div className="card__content card__padding">
                                      <article className="card__article">
                                          <h2><a href="#">Lau Zi Quan</a></h2>

                                          <p>Hi, my name is Zi Quan from Ngee Ann Polytechnic. I spent most of my time playing game and one of my favourite game is Mobile Legend.</p>
                                      </article>
                                  </div>
                              </div>
                          </div>

                          <div className="wrapper">
                              <div className="card radius shadowDepth1">
                                  <div className="card__image border-tlr-radius" style={centerImage}>
                                      <img src="./img/profile.jpg" alt="image" style={imageStyle} />
                                  </div>

                                  <div className="card__content card__padding">
                                      <article className="card__article">
                                          <h2><a href="#">Tan Chang Sheng</a></h2>

                                          <p>Hi, my name is Chang Sheng from Ngee Ann Polytechnic. I am good in React and I will love to take up this challenge in future.</p>
                                      </article>
                                  </div>
                              </div>
                          </div>
                      </Swiper>
                    </p>
                </div>
            </div>
            {/*This is to ensure that the div height covers all content*/}
            <div className="clearfix"></div>

            <br/>
            <Footer />
        </div>
        );
    }
}

handleViewProject.propTypes = {
    projectName: PropTypes.string.isRequired,
    projectStartDate: PropTypes.string.isRequired,
    projectEndDate: PropTypes.string.isRequired,
    projectDesc: PropTypes.string.isRequired,
    projectPoster: PropTypes.string.isRequired,
    projectVideoUrl: PropTypes.string.isRequired,
    projectApproved: PropTypes.string.isRequired,
    projectImages: PropTypes.array.isRequired,
    projectMembers: PropTypes.array.isRequired,
};
