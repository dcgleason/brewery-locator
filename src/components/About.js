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
      <div className="about">
       <div>Make Your Own Brewery Tour</div>
       <Link to="/manager" className="link">Display Manager</Link>
       <Route path="/manager" component={App}/>
       </div>
    </div>
    );
  }
}

export default About;