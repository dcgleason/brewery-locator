import React from 'react';
import './App.css';
import CitySearch from './components/CitySearch';
import Results from "./components/Results";
import InputForm from "./components/InputForm"
import InputItem from "./components/InputItem"
import Header from './components/Header';
import { EmailShareButton, FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { EmailIcon, FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";



class App extends React.Component {
  constructor(){
    super()
    this.state={
      data: [],
      places: [],
    }
  }

  addItem=(place)=> {
    console.log(place)
   this.setState({ 
      places: [...this.state.places, place],  // not updating with onSubmit 
    }); 
  };

  onChange = (e) => {  // to update state to change the url, onChange runs search function
    this.setState({
      query: e.target.value
    });

    this.search(this.state.query);
  };

  search = (query) => {
    const url = `https://api.openbrewerydb.org/breweries?by_city=${query}`;
    fetch(url)
      .then(results => results.json())
      .then(res => {console.log(res)
          this.setState({data: res});
      })
      };

  render() {
    return (
    <div className="entire-app">
        <header className="header">
         <Header/>
      </header>
      <div className="app-container">
      <div className="Brewery-container">
          <CitySearch 
           onChange={this.onChange}
          />
          <Results data={this.state.data}/>
        </div>
        <div className="notes-container">
        <InputForm onSubmit={this.addItem}/>
        <InputItem places={this.state.places}/>
         <div className="social-share">
           <div className="share-message">Share your list!</div>
          <FacebookShareButton url={'facebook.com'}><FacebookIcon/></FacebookShareButton>
          <TwitterShareButton url={'https://twitter.com/home'}><TwitterIcon/></TwitterShareButton>
          <WhatsappShareButton url={'whatsapp.com'}><WhatsappIcon/></WhatsappShareButton>
          <EmailShareButton url={'gmail.com'}><EmailIcon/></EmailShareButton>
         </div>
       </div>
      </div> 
      </div>
     
    );
  }
}

export default App;

//figure out how to add more than one item to make a list, make the UI nice (brewery 1, brewery 2, etc)
// figure out how to make the css so that a htird of the screen is the togo to note section
