import React, {Dimensions, Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {withRouter, Link} from 'react-router-dom';
import Gallery from 'react-grid-gallery';

import NavigationApp from '../../components/NavigationApp.jsx';
import StudentCarousel from '../student/studentCarousel.jsx';
import Footer from '../../components/Footer.jsx';

/*For gallery hover image name & caption*/
const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    maxHeight: "140px",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    width: "98.5%",
    color: "white",
    padding: "2px",
    fontSize: "90%"
};

/*For project date*/
const parseDate = (dateString) => {
    const tokenizedDate = dateString.split('-');
    const month = Number(tokenizedDate[1]);

    let result = ''
    switch (month) {
        case 1:
            result = 'January';
            break;
        case 2:
            result = 'February';
            break;
        case 3:
            result = 'March';
            break;
        case 4:
            result = 'April';
            break;
        case 5:
            result = 'May';
            break;
        case 6:
            result = 'June';
            break;
        case 7:
            result = 'July';
            break;
        case 8:
            result = 'August';
            break;
        case 9:
            result = 'September';
            break;
        case 10:
            result = 'October';
            break;
        case 11:
            result = 'Novemebr';
            break;
        case 12:
            result = 'December';
            break;
    }
    return `${tokenizedDate[2]} ` + result + ` ${tokenizedDate[0]}`
}

export default class handleViewProject extends Component {

	constructor() {
		super();

		this.state = {
			getImages: [],
			listOfImages: []
		}
	}

	update() {
		this.props.projectImages.map((images) => {

			var img = images.image;
			var caption = images.image_name + ": " + images.image_desc;

			this.state.getImages.push({
				"src": img,
				"thumbnail": img,
				//"thumbnailWidth": 320,
				//"thumbnailHeight": 174,
				"caption": caption,

				/*"src": "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                    "thumbnail": "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                    "thumbnailWidth": 320,
                    "thumbnailHeight": 174,
                    "caption": "After Rain (Jeshu John - designerspics.com)",*/
			})
		});
	}

    renderVideo() {
        const url = this.props.projectVideoUrl.replace("watch?v=", "embed/") + "&embedded=true";

		return (
			<div className="project-video">
                <iframe width="560" height="315" src={url} target="_parent" allowFullScreen></iframe>
			</div>
		)
	}

	renderGallery() {
		//Push images into getImages state
		this.update()

		//Input caption to each and every image for display
		var images =
	        this.state.getImages.map((i) => {
	            i.customOverlay = (
	                <div style={captionStyle}>
						<div>{i.caption}</div>
						{i.hasOwnProperty('tags') &&
							this.setCustomTags(i)}
					</div>
				);
	            return i;
	        });

		return (
			<div className="project-gallery">
				{this.props.projectImages.length > 0 &&
                    <div id="wrap">
                        <div className="project-main-hd">
                            {/*<img className="normal" src="../img/resume-gif.webp" alt="icon" className="main-hd-img" />*/}
                            <img className="normal" src="../img/search.png" alt="icon" className="project-main-hd-img" />
                            <span id="test" className="project-main-hd-txt">Gallery</span>
                        </div>
                        <div>
                            <Gallery images={images} enableImageSelection={false}/>
                        </div>

                        {/*This is to ensure that the div height covers all content*/}
                        <div className="clearfix"></div>
                    </div>
                }
			</div>
		)
	}

	portfolioHeader() {
        return (
            <div className="main-hd">
				<img className="normal" src="../img/team.png" alt="icon" className="project-main-hd-img" />
				<span id="test" className="project-main-hd-txt">Team Member</span>
            </div>
        )
    }

    renderMembers() {
		return (
			<div id="wrap"  style={{overflowX: 'hidden' }}>
	            <div id="header">
	                {/*<h1 className="mainHeader">Projects</h1>*/}
	                <div className="w3-container">
	                    {/*<h2>Mobile First Responsiveness</h2>
	                            <p className="w3-large">Try to resize the window!</p>
	                    http://54.191.109.239/FYPXpal/AmandaInfo*/}
	                </div>
	                <div className="w3-row w3-border">
	                    <StudentCarousel
	                        allStudents={this.props.projectMembers}
							header={this.portfolioHeader()}
                     />

                        {/*<div className="project-gallery">
                            {this.props.projectMembers.length > 0 &&
                            <div id="wrap">
                            <div className="project-main-hd">
                            <img className="normal" src="../img/team.png" alt="icon" className="project-main-hd-img" />
                            <span id="test" className="project-main-hd-txt">Team Member</span>
                            </div>

                            <div className="container-fluid">
                            <div className="row" style={justifyContent}>
                            {this.props.projectMembers.map((studentProject, index) => {
                            return (
                            <div className="project-team" key={index}>
                             <Link to ={{
                            pathname: '/ViewStudent/' + studentProject.student_id,
                            state: { StudentID: studentProject.student_id }
                             }}>
                            <img className="normal" src={studentProject.student_photo} alt={studentProject.student_name} style={imageStyle} />
                            <h2>{studentProject.student_name}</h2>
                            <p>{studentProject.project_role}</p>
                             </Link>
                            </div>
                            )
                            })}
                            </div>
                            </div>
                            </div>
                            }
                        </div>*/}

	                </div>
	                {/*This is to ensure that the div height covers all content*/}
	                <div className="clearfix"></div>
	            </div>
	        </div>
		)
	}

	renderProjectView() {
		if (this.props.projectName) {
			return (
                <div>
                    <div className="projectContainer">
                        <h1 className="projectname-custom projectName">{this.props.projectName}</h1>
                        <div className="project-info-main">
                            <div className="project-info-custom-left">
                                {/*750x500*/}
                                <div className="project-img-custom animated fadeInLeft"><img src={this.props.projectPoster} alt=""/></div>
                            </div>
                            <div className="project-info-custom-right">
                                <div className="project-det">
                                    <div className="project-info-details animated fadeInRight">
                                        <div className="project-header-container">
                                            <i className="fa fa-address-card-o fa-2x"></i>
                                            <h3 className="mainHeader project-header-text">Description</h3>
                                        </div>
                                        <p>{this.props.projectDesc}</p>
                                    </div>

                                    <div className="project-info-details animated fadeInRight">
                                        <div className="project-header-container">
                                            <i className="fa fa-info-circle fa-2x"></i>
                                            <h3 className="mainHeader project-header-text">Project Details</h3>
                                        </div>
                                        Start Date: {parseDate(this.props.projectStartDate)}
                                        <br/>
                                        End Date: {parseDate(this.props.projectEndDate)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {this.props.projectVideoUrl != "" &&
                        <div className="projectContainer">
                            {this.renderVideo()}
                        </div>
                    }

                    {this.props.projectImages.length > 0 &&
                        <div className="projectContainer">
                            {this.renderGallery()}
                        </div>
                    }

                    {this.props.projectMembers.length > 0 &&
                        <div className="projectContainer">
                            {this.renderMembers()}
                        </div>
                    }
                </div>
			)
		}
		return (
			<div className="portfolio-card">
				<span className="custom-loader">
					<i className="fa fa-spinner fa-spin fa-5x"></i>
				</span>
			</div>
		)
	}

	render() {
		return (
			<div>
				<NavigationApp display={false} />
				<br/>
                {this.renderProjectView()}
				{/*This is to ensure that the div height covers all content*/}
				<div className="clearfix"></div>

				<br/>
				<Footer/>
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
	projectMembers: PropTypes.array.isRequired
};
