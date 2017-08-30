import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom';

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

export default class About extends Component{

    constructor (props){
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {

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

        var subNav = {
          borderRight: '10px',
        }

        var firstElement = {
          paddingBottom: '5%'
        }

        var subElement = {
          paddingTop: '5%'
        }

        return(
            <div>
              <NavigationApp />
              <br/>

              <div className="contentWrapper">
                <div className="w3.container w3-cell-filter">
              <Sticky>
                <h2 style={subNav}>
                  <Link activeClass="active" className="map" to="map" spy={true} smooth={true} duration={500}>School Map</Link>
                </h2>
                <h2 style={subNav}>
                  <Link activeClass="active" className="alumni" to="alumni" spy={true} smooth={true} duration={500}>Alumni</Link>
                </h2>
              </Sticky>
            </div>

              {/*<nav>
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                    <li><Link activeClass="active" className="test1" to="map" spy={true} smooth={true} duration={500}>School Map</Link></li>
                    <li><Link activeClass="active" className="test2" to="alumni" spy={true} smooth={true} duration={500}>Alumni</Link></li>
                  </ul>
                </div>
              </div>
            </nav>*/}

            <div className="w3-cell-content">
            <Element name="map" className="element" style={ firstElement }>
                <img className="normal" src="../img/sch-map.png" style={imageSch}/>
            </Element>

            <hr/>

            <Element name="alumni" className="element" style={ subElement }>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-4" style={justifyContent}>
                            <img className="normal" src="../img/Jason.jpg" style={image}/>
                            <h2>Jason Shen</h2>
                            <p>Dip IT Graduate
                                <br/>
                                Class of 2006
                                <br/>
                            Owner, Onyx Consulting</p>
                        </div>
                        <div className="col-xs-7">
                            <p>To the class of 2017, congratulations on graduating from one of the best schools you could have gone to. I'm confident the lessons learnt, experiences gained and friendships made over the past 3 years will set you in good stead for whatever challenges you face in future. Congratulations once again and wishing you all the very best in your future endeavors!</p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-4" style={justifyContent}>
                            <img className="normal" src="../img/Yappy.jpg" style={image}/>
                            <h2>Yappy Yap</h2>
                            <p>Dip IT Graduate
                                <br/>
                                Class of 2003
                                <br/>
                                Chief Technology Officer
                                <br/>
                            Daylight Studios</p>
                        </div>
                        <div className="col-xs-7">
                            <p>Congratulation on your graduation. You will be leaving Ngee Ann Polytechnic soon and venture on your own. Be it going to University to further your study, enlisting into National Service, or entering the working society, Know that your school and its graduates are always there to guide and help.</p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-4" style={justifyContent}>
                            <img className="normal" src="../img/Shuren.jpg" style={image}/>
                            <h2>Tan Shu Ren</h2>
                            <p>Dip IT Graduate
                                <br/>
                                Class of 2006
                                <br/>
                            Engineer, CSIT</p>
                        </div>
                        <div className="col-xs-7">
                            <p>"Give a man a fish; you have fed him for today. Teach a man to fish; and you have fed him for a lifetime". The curriculum and teaching methodology in the School of ICT laid a strong foundation and it had served me well throughout my university education and career. As you embark on the next stage of your life, I strongly urge you to continue to have the hunger to learn new things, to think out-of-the-box and to challenge yourself in whatever scenarios you will find yourself in. Congratulations on your graduation and go take on the world!</p>
                        </div>
                    </div>
                </div>


                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-4" style={ justifyContent }>
                            <img className="normal" src="../img/Sam_Yong.jpg" style={image}/>
                            <h2>Sam Yong</h2>
                            <p>Dip IT Graduate
                                <br/>
                                Class of 2012
                                <br/>
                                Graduate at NUS
                                <br/>
                            School of Computing</p>
                        </div>
                        <div className="col-xs-7">
                            <p>To the Class of 2017, my heartiest congratulations to you on your graduation. Against all the odds that you may face beyond this great milestone in your life, I trust that Ngee Ann Polytechnic has equipped you with the desire for learning beyond the classroom and relevant skills for the rapidly evolving workforce and economy. It is hence imperative to stay versatile and keep feeding your hunger to venture beyond what is comfortable. I wish you great success in your journey ahead.</p>
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
