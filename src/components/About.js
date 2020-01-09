import React from 'react';
import { Route, Link } from "react-router-dom";
import App from "../App"



class About extends React.Component {
  constructor(){
    super()
  }

  
  render() {
    return (
    <div className="entire-app">
       <div>Make Your Own Brewery Tour</div>
       <Link to="/manager">Show Manger</Link>
       <Route path="/manager" component={App}/>
    </div>
    );
  }
}

export default About;