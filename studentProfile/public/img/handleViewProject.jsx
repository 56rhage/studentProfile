import React, { Dimensions, Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link } from 'react-router-dom';
import Gallery from 'react-grid-gallery';

import NavigationApp from '../../components/NavigationApp.jsx';
import Footer from '../../components/Footer.jsx';

export default class handleViewProject extends Component{

    constructor () {
		super();

        this.state = {
            getImages: [],
            listOfImages: [],
        }
    }

    update(){
        this.props.projectImages.map((images) => {

            var img = images.image;
            var caption = images.desc;

            this.state.getImages.push(
                {
                    "src": img,
                    "thumbnail": img,
                    "thumbnailWidth": 320,
                    "thumbnailHeight": 174,
                    "caption": caption,

                    /*"src": "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                    "thumbnail": "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                    "thumbnailWidth": 320,
                    "thumbnailHeight": 174,
                    "caption": "After Rain (Jeshu John - designerspics.com)",*/
                }
            )
        });
    }

  render(){

    const params = {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        allowSwipeToPrev: true,
        allowSwipeToNext: true,
        loop: true,
        loopedSlides: 3,
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

    /*var imageSizeLandscape = {
      width: '100%',
      maxWidth: '500px',
    }*/

    var imageSize = {
      maxWidth: '100%',
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

    var justifyContent = {
        justifyContent: 'center',
    }

    var padding = {
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '2%',
        paddingBotton: '2%',
    }

    var posterImage = {
        maxWidth: '500px',
    }

    var content = {
        fontSize: '12px',
    }

    var profileImg = './img/profile.jpg';
    var project = './img/Project1.jpg';
    var banner = './img/Banner1.jpg';
    var landscape = './img/landscape.jpg';

    return (
        <div>
            <NavigationApp />
            <br/>

            <div className="projectContainer">
                <h1 className="my-4">{this.props.projectName} {/*<small>Secondary Text</small>*/}</h1>

                <div className="row">
                    {/*750x500*/}
                    <div className="col-md-7"><img className="normal" className="img-fluid" src={this.props.projectPoster} alt="" style={ posterImage } /></div>
                    <div className="col-md-4">
                        <h3 className="my-3">Project Description</h3>
                        <p style={content}>{this.props.projectDesc}</p>
                        <h3 className="my-3">Project Details</h3>
                        Start Date: {this.props.projectStartDate}
                        <br/>
                        End Date: {this.props.projectEndDate}
                    </div>
                </div>
            </div>


            <div style={alignCenter}>

                {this.props.projectImages.length > 0 &&
                    <div>
                        <div id="wrap">
                            <h1 className="mainHeader">Gallery</h1>
                            <div style={padding}>
                                {this.update()}
                                <Gallery
                                    images={this.state.getImages}
                                    enableImageSelection={false}
                                />
                            </div>

                            {/*This is to ensure that the div height covers all content*/}
                            <div className="clearfix"></div>
                        </div>
                        <hr/>
                    </div>
                }

                {this.props.projectMembers.length > 0 &&
                    <div id="wrap">
                        <h1 className="mainHeader">Team Member</h1>

                        <div className="container-fluid">
                            <div className="row" style={ justifyContent }>
                                {this.props.projectMembers.map((studentProject, index) => {
                                    return(
                                        <div className="col-xs-3" key={index}>
                                            <Link to ={{
                                                //pathname: '/ViewStudent',
                                                pathname: '/ViewStudent/' + studentProject.student_id,
                                                //state: { StudentID: studentProject.student_id }
                                            }}>
                                                <img className="normal" src={ profileImg } alt="image" style={ imageStyle } />
                                                <h2>{studentProject.student_id}</h2>
                                                <p>{studentProject.project_role}</p>
                                            </Link>
                                        </div>
                                    )
                                }
                                )}

                            </div>
                        </div>


                    </div>
                }
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
    projectVideoUrl: PropTypes.string,
    projectApproved: PropTypes.string.isRequired,
    projectImages: PropTypes.array.isRequired,
    projectMembers: PropTypes.array.isRequired,
};
