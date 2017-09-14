import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {withRouter, Link} from 'react-router-dom';
import Parallax from 'react-springy-parallax'

export default class eachFaculty extends Component {

	render() {
		const styles = {
			fontFamily: 'inherit',
			fontSize: 14,
			lineHeight: '10px',
			color: 'white',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}

		return (
            <div>
                <Parallax.Layer offset={0} speed={1} style={{
                    backgroundImage: "url(../img/img_a3da_2017.jpg)",
                    backgroundSize: "contain",
                }}/>
                <Parallax.Layer offset={2} speed={1} style={{
    					backgroundColor: '#805E73'
                }}/>
                <Parallax.Layer offset={4} speed={1} style={{
    					backgroundColor: '#87BCDE'
                }}/>

                <Parallax.Layer offset={0} speed={0.5} style={styles} onClick={() => this.refs.parallax.scrollTo(1)}>
                    Faculty Header Here
                </Parallax.Layer>

                <Parallax.Layer offset={1} speed={-0.1} style={styles}>
                    Featured Students
                </Parallax.Layer>

                <Parallax.Layer offset={2} speed={0.5} style={styles} onClick={() => this.refs.parallax.scrollTo(3)}>
                    Another page ...
                </Parallax.Layer>

                <Parallax.Layer offset={3} speed={-0.1} style={styles}>
                    Featured Students
                </Parallax.Layer>

                <Parallax.Layer offset={4} speed={0.5} style={styles} onClick={() => this.refs.parallax.scrollTo(3)}>
                    Another page ...
                </Parallax.Layer>

                <Parallax.Layer offset={5} speed={-0.1} style={styles}>
                    Featured Students
                </Parallax.Layer>

                <div className="clearfix"></div>
            </div>
		);
	}
}

eachFaculty.propTypes = {
	projectPoster: PropTypes.array.isRequired,
	projectName: PropTypes.array.isRequired,
	projectDesc: PropTypes.array.isRequired,
	projectTitle: PropTypes.string.isRequired,
	facultyID: PropTypes.string.isRequired
};
