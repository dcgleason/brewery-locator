import React from 'react';
import { Route, Link } from "react-router-dom";
import App from "../App"



class About extends React.Component {
  constructor(){
    super()
  }

  
  render() {
    return (
    <div className="about-container">
      <div className="info-container">
        <div className="info">
            <h1>About</h1>
            <h6>...Design your own brewery tour! Search brewery by city and then input your desired tour stops. Share your brewery tour to social media! Click "Display Manager" at the top of the page to show app.</h6>
        </div>
      </div>
    </div>
    );
  }
}

export default About;