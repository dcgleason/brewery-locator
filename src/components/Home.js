import React from 'react';
import { Route, Link } from "react-router-dom";
import App from "../App"
import About from "./About"



class Home extends React.Component {
  constructor(){
    super()
  }


  
  render() {
    return (
    <div className="home-container">
        <h6>
        <Link to="/manager" className="link">Display Manager</Link>
        <br/>
        <Link to="/" className="link">About App</Link>
        </h6>
        <Route path="/manager" component={App}/>
        <Route path="/" component={About}/>
    </div>
    );
  }
}

export default Home;