import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import Scrollchor from 'react-scrollchor';


import Scroll from 'react-scroll'; // Imports all Mixins
import Sticky from 'react-sticky-el';

import NavigationApp from '../components/NavigationApp.jsx';
import Footer from '../components/Footer.jsx';

// Or Access Link,Element,etc as follows
var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var durationFn = function(deltaTop) {
    return deltaTop;
};

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

export default class About extends Component{

    constructor (props){
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {
        initGA();
        logPageView();

      Events.scrollEvent.register('begin', function() {
        console.log("begin", arguments);
      });

      Events.scrollEvent.register('end', function() {
        console.log("end", arguments);
      });

      scrollSpy.update();

    }
    scrollToTop() {
      scroll.scrollToTop();
    }
    componentWillUnmount() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    }

    render(){

        console.log("window", window.location.hash);

        var image = {
            width: '100%',
            maxWidth: '180px',
        }

        var imageSch = {
            width: '100%',
        }

        var justifyContent = {
            justifyContent: 'center',
            textAlign: 'center',
        }

        var firstElement = {
          paddingBottom: '5%'
        }

        var subElement = {
          paddingTop: '5%'
        }

        const activeAlumni = classNames({
            "active": window.location.hash === '#alumni',
            "about-schroll": true
        });

        const activeMap = classNames({
            "active": window.location.hash !== '#alumni',
            "about-schroll": true
        });        

        return(
            <div>
                <Element name="map">
                    <NavigationApp />
                </Element>
                
                <div className="about-page">
                    <div className="about-sticky-contr">
                            <h2>
                                <Link activeClass="active" className="map" to="map" spy={true} smooth={true} duration={500}>School Map</Link>
                            </h2>
                            <h2>
                                <Link activeClass="active" className="alumni" to="alumni" spy={true} smooth={true} duration={500}>Alumni</Link>
                            </h2>
                    </div>
                    <div className="about-container">
                    <Element name="map">
                            <h1 className="mainHeader" id="map">School Map</h1>
                            <div className="school-map">
                                <img className="normal" src="../img/sch-map.png" />
                            </div>
                        </Element>
                        <Element name="alumni">
                            <h1 className="mainHeader" id="alumni">Alumni</h1>
                         
                            <div className="about-alumni">
                                <div className="alumni-member">
                                    <div className="">
                                        <div className="">
                                            <img className="alumni-img" src="../img/Jason.jpg" style={{ width: '200px', height: '200px'}} />
                                            <h2>Jason Shen</h2>
                                            <p>Dip IT Graduate
                                                <br/>
                                                Class of 2006
                                                <br/>
                                            Owner, Onyx Consulting</p>
                                        </div>
                                        <div>
                                            <p>To the class of 2017, congratulations on graduating from one of the best schools you could have gone to. I'm confident the lessons learnt, experiences gained and friendships made over the past 3 years will set you in good stead for whatever challenges you face in future. Congratulations once again and wishing you all the very best in your future endeavors!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="alumni-member">
                                    <div className="">
                                        <div className="">
                                            <img className="almuni-img" src="../img/Yappy.jpg" style={{ width: '200px', height: '200px'}} />
                                            <h2>Yappy Yap</h2>
                                            <p>Dip IT Graduate
                                                <br/>
                                                Class of 2003
                                                <br/>
                                                Chief Technology Officer
                                                <br/>
                                            Daylight Studios</p>
                                        </div>
                                        <div className="">
                                            <p>Congratulation on your graduation. You will be leaving Ngee Ann Polytechnic soon and venture on your own. Be it going to University to further your study, enlisting into National Service, or entering the working society, Know that your school and its graduates are always there to guide and help.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="alumni-member">
                                    <div className="">
                                        <div className="">
                                            <img className="alumni-img" src="../img/Shuren.jpg" style={{ width: '200px', height: '200px'}}/>
                                            <h2>Tan Shu Ren</h2>
                                            <p>Dip IT Graduate
                                                <br/>
                                                Class of 2006
                                                <br/>
                                            Engineer, CSIT</p>
                                        </div>
                                        <div className="">
                                            <p>"Give a man a fish; you have fed him for today. Teach a man to fish; and you have fed him for a lifetime". The curriculum and teaching methodology in the School of ICT laid a strong foundation and it had served me well throughout my university education and career. As you embark on the next stage of your life, I strongly urge you to continue to have the hunger to learn new things, to think out-of-the-box and to challenge yourself in whatever scenarios you will find yourself in. Congratulations on your graduation and go take on the world!</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="alumni-member">
                                    <div className="">
                                        <div className="">
                                            <img className="alumni-img" src="../img/Sam_Yong.jpg" style={{ width: '200px', height: '200px'}}/>
                                            <h2>Sam Yong</h2>
                                            <p>Dip IT Graduate
                                                <br/>
                                                Class of 2012
                                                <br/>
                                                Graduate at NUS
                                                <br/>
                                            School of Computing</p>
                                        </div>
                                        <div className="">
                                            <p>To the Class of 2017, my heartiest congratulations to you on your graduation. Against all the odds that you may face beyond this great milestone in your life, I trust that Ngee Ann Polytechnic has equipped you with the desire for learning beyond the classroom and relevant skills for the rapidly evolving workforce and economy. It is hence imperative to stay versatile and keep feeding your hunger to venture beyond what is comfortable. I wish you great success in your journey ahead.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Element>
                    </div>
                </div>
                <br/>
                <Footer />
            </div>
        )
    }
}
