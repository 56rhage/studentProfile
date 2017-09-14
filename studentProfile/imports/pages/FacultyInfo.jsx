import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import NavigationApp from '../components/NavigationApp.jsx';
import EachFaculty from '../components/faculty/eachFaculty.jsx';
import Footer from '../components/Footer.jsx';

/*Analytics*/
import ReactGA from 'react-ga';

export const initGA = () => {
  console.log('GA init');
  ReactGA.initialize('UA-101967047-1');
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname});
  ReactGA.pageview(window.location.pathname);
}
/*Analytics*/

export default class FacultyInfo extends Component{
  constructor(props) {
    super(props);

    this.state = {
        facultyName: '',
        facultyDesc: '',
        facultyImg: '',
        facultyID: this.props.location.state.facultyId,
        /*facultyID: props.match.params.facultyID,*/
    }
  }

  componentDidMount(){
      initGA();
      logPageView();

      switch (this.state.facultyID){
          case '1':
              this.setState({
                  facultyImg: '../img/img_isf_2017.jpg',
                  facultyName: 'Diploma in Information Security',
                  facultyDesc: 'Mitigate cyber threats Singapore faces in our quest to be a smart nation. IT security professionals are in higher demand to help Singapore succeed in this quest. With rapid growth in the area of Financial Technology, information security will be even more critical to protect our financial institutions. Join the fight against cybercrime with our Diploma in Information Security & Forensics (ISF). In your first year, you will build a strong foundation in basic IT and security through modules such as Programming, Networking Fundamentals, Front End Development, Databases, Cryptography, Vulnerabilities 101 and OS Fundamentals.',
              });
              break;
          case '2':
              this.setState({
                  facultyImg: '../img/img_a3da_2017.jpg',
                  facultyName: 'Diploma in Animation Art',
                  facultyDesc: 'Create new worlds and ignite your imagination in no time with the Diploma in Animation & 3D Arts (A3DA). Bring animated characters to life with flawless art, design, storytelling and character performance. A comprehensive practice-oriented course, A3DA is designed to take you through the entire process of animation production, from conceptualisation to postproduction. In your first year, you will acquire a firm foundation in animation, covering modules such as Principles of Animation and Fundamentals for Creative Professionals. You will also learn the basics of storytelling, scriptwriting, storyboarding and drawing. In your second year, you will continue to hone your fine art skills with modules such as Advanced Figure Drawing and Animal Anatomy. You will also be taught character design, 3D modelling and animation, and attend masterclasses conducted by renowned artists and professionals in the animation industry.',
              });
              break;
          case '3':
              this.setState({
                  facultyImg: '../img/img_fi_2017.jpg',
                  facultyName: 'Diploma in Financial Informatics',
                  facultyDesc: 'Financial Technology (FinTech) is the next growth area in the world of Finance. Many financial institutions are making disruptive changes in the use of digital technologies, from Apple Pay to PayPal, to allow them to meet future banking needs. The Diploma in Financial Informatics (FI) will help you surf this new technology wave sweeping the financial world. In the first year, you will build a strong foundation of IT knowledge, focusing on coding, designing databases and understanding IT infrastructure. At the same time, you will learn about the Financial Ecosystem, specifically in the area of Technology and Operations (T&O) to understand the financial landscape.',
              });
              break;
          case '4':
              this.setState({
                  facultyImg: '../img/img_it_2017.jpg',
                  facultyName: 'Diploma in Information Technology',
                  facultyDesc: 'Help businesses and people with innovative IT solutions that increase business competitiveness and enhance their quality of life, or even start your very own e-business, with a Diploma in Information Technology (IT). Core modules in your first year will focus on developing your understanding in core computing skills such as programming, networking, databases and enterprise information systems. In your second and third year, you are free to choose from myriad electives that suit your interest and passion. You will be guided along to investigate IT-related topics to develop your digital portfolio. Finally, you will round up your learning with a six-month local or overseas internship with organisations such as KPMG, IBM, SingTel and Microsoft, or create your own IT business and ideas at our technology hubs. You can also work on a capstone project which will beef up your digital portfolio and impress your future employer!',
              });
              break;
          case '5':
              this.setState({
                  facultyImg: '../img/img_mma_2017.jpg',
                  facultyName: 'Diploma in Immersive Media & Game Design',
                  facultyDesc: 'Build immersive experiences that allow users to interact with graphics, moving images and sound, or launch the next big interactive gaming app with our revamped Diploma in Immersive Media & Game Design (IMGD). In your first year, you will receive rigorous training in design and programming through modules such as Drawing Foundation, Applied Design, and Programming Fundamentals. In your second year, choose from one of these specialisations: Immersive Interactive Media Get trained in developing apps for the Web, mobile and wearable devices, while acquiring skills in design, technology and user experience design. Game Design Learn to conceptualise, design and create interactive entertainment experiences as well as digital 3D game environments and characters - sci-fi or fantasy. Plus, pick up skills in game design and game engine scripting languages.',
              });
              break;
          default:
              this.setState({
                  facultyImg: '../img/img_mma_2017.jpg',
                  facultyName: 'Diploma in Nothing',
                  facultyDesc: 'Some information here',
              });
              break;
      }
  }

  render() {
      var background_img = {
          backgroundImage: 'url(' + this.state.facultyImg + ')',
      }

    return (
      <div>
          <NavigationApp display={false}/>
          <br/>

          <header id="header">
              <div className="wrap-header">
                  <div className="main-header" style={background_img}>
                      <div className="zerogrid">
                          <div className="zerorow">
                              <div className="hero-heading">
                                  <span>{this.state.facultyName}</span>
                                  <div className="tl"></div>
                                  <div className="tr"></div>
                                  <div className="br"></div>
                                  <div className="bl"></div>
                              </div>
                              <div className="heading-text">
                                  <h2></h2>
                                  <p className="facultyContent">A brief introduction of what this course is about</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </header>

          <div className="clearfix"></div>

          <section id="container">
              <div className="wrap-container">
                  <section className="content-box box-1">
                      <div className="">
                          <div className="row wrap-box">
                              <div className="header">
                                  <h2>About the course</h2>
                                  <p className="intro">{this.state.facultyDesc}</p>
                              </div>
                          </div>
                      </div>
                  </section>
              </div>
          </section>

          <br />
          <Footer />
      </div>
    );
  }
}
