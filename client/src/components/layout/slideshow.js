import React from 'react';
import { Slide } from 'react-slideshow-image';
import pic from './elders.jpg';
import pic1 from './olderadult.jpg';
import pic2 from './olderadult2.jpg';
import '../../App.css';
import {Container, Row, Col} from 'react-bootstrap'
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames"

import {getEvents} from "../../actions/eventActions";

import "./home.css";
import "./EventList.js";

 
const slideImages = [
  pic,
  pic1,
  pic2
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
 
class slideshow extends React.Component {
    render(){
      return (
        <div className="slide-container">
          <Slide {...properties}>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
               
              </div>
            </div>
          </Slide>
        </div>
      )
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { getEvents }
)(slideshow);