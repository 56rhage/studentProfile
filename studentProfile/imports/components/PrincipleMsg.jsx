import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';

export default class Slideshow extends Component{

  render() {
    return (
		<div id="header">
			<h1 className="mainHeader">Principle Message</h1>
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-4" id="principlePhoto"><img src="./img/MrNgPohOon.jpg" className="homeImg"/></div>
                    <div className="col-xs-7">
                        <blockquote>
                            <p>
                                Dear Friends,
                                <br/>
                                It gives me great pleasure to celebrate the graduation of another batch of ICTians with this Graduation Show 2017 - Infinite 2017.
                                <br/><br/>
                                Infinite 2017 is a digital playground that showcases infinite possibilities, infinite growth and limitless future of our graduating ICTians of the Diplomas in Information Technology, Financial Informatics, Multimedia & Animation and Animation & 3D Arts.
                                <br/><br/>
                                The diploma that you have earned through the rigorous years of learning journey with us should not be thought of as just a reward. The diploma earned is an opportunity in opening the doors to many paths; a commitment and an obligation to go forward in continuing the life-long process of learning.
                                <br/><br/>
                                You must resolve to grow intellectually, technically and professionally every day of your work and family life. Be determined to stay updated and to maintain the knowledge relevant to your profession. Take advantage of the various training schemes available, such as SkillsFuture, to remain at the leading edge of the Infocomm and digital media industry. Society will not progress or prosper simply by just staying status quo, doing what it already knows. Every once in a while, someone will make some new discoveries or create some new ideas that advance the world to another level. That someone could just be “You”. Seek out new challenges, projects or ideas that others are afraid to venture.
                                <br/><br/>
                                Once again, I want to congratulate every graduating ICTian and offer you my best wishes.
                                <br/><br/>
                                In closing, I would like to take this opportunity to thank our important stakeholders, namely our Advisory Committee, industry partners, University partners, ICT staff, alumni and parents who have all contributed and supported us in the learning journey of every ICTian.
                            </p>
                            <p className="alignRight">-- Ng Poh Oon, Director, School of InfoComm Technology</p>
                        </blockquote>
                    </div>
                </div>
            </div>

			{/*This is to ensure that the div height covers all content*/}
			<div className="clearfix"></div>
		</div>
    );
  }
}
