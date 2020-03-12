import React from 'react';
// import logo from './logo.svg';
import '../../App.css';
import {Container, Row, Col} from 'react-bootstrap'
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames"

import {getEvents} from "../../actions/eventActions";
import pic from './elders.jpg';
import pic1 from './olderadult.jpg';
import pic2 from './olderadult2.jpg';
import "./home.css";
import "./EventList.js";
import { Slide } from 'react-slideshow-image';

const slideImages = [
  pic,
  pic,
  pic
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

class Landing extends React.Component {
	constructor(props) {

		super(props);
<<<<<<< Updated upstream
		this.state = {value: '', i: ""};
=======
		this.state = {value: '', message: '', messageColor: '#000000'};
>>>>>>> Stashed changes
	    this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);

    	this.images = [pic, pic1, pic2];
    	// console.log("constructing")
    	this.i = 2;



	}


	handleChange(event) {
		this.setState({value: event.target.value});
		console.log("hello");
		
	}


	slidethrough(){
		if (this.i<2){
			console.log(this.i)
			this.state = {value: '', i: ""}
			this.i ++;


		} else{
			console.log(this.i)
			this.state = {value: '', i: ""}
			this.i = 0;

	
		}	
	}

	runslidethrough(){
		var interval = setInterval(this.slidethrough, 3000);
	}

	componentWillMount(){
		this.runslidethrough()
	}


	handleSubmit(event) {
	   // validate zip here
	   //event.preventDefault();
	}


	render(){

		return(
			<div id = "grad">
			<div id="bg-image"></div>
			<Container>
			<Row>
			<Col id = "slogan">
<<<<<<< Updated upstream
			
=======
			<h1>Meet other adults at events near you. Enter your zipcode below.</h1>
>>>>>>> Stashed changes
			
			

			<form action={`/list/${this.state.value}`} method="get" onSubmit={this.handleSubmit}>
			<h1 id = "near">Enter Zipcode</h1>
			
			<input id = "zip" value={this.state.value} onChange={this.handleChange} type="zipcode" /> <br/>
			<input id = "submitbutton" type="submit" value="Submit" />
			</form>
			</Col>


			<Col id = "picture123">
			<div className="slide-container">
          		<Slide {...properties}>
            		<div className="each-slide">
              			<div style={{'backgroundImage': `url(${slideImages[0]})`}}></div>
            		</div>
           			<div className="each-slide">
              			<div style={{'backgroundImage': `url(${slideImages[1]})`}}></div>
            		</div>
           			 <div className="each-slide">
             		 	<div style={{'backgroundImage': `url(${slideImages[2]})`}}></div>
            		</div>
          		</Slide>
        	</div>
      
			</Col>
			</Row>
			</Container>

			</div>
			)}
	}

Landing.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
	auth: state.auth
});
export default connect(
	mapStateToProps,
	{ logoutUser, getEvents }
	)(Landing);