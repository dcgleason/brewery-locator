import React from 'react';
import './App.css';
import CitySearch from './components/CitySearch';
import Results from "./components/Results";
import InputForm from "./components/InputForm"
import Header from './components/Header';
import { EmailShareButton, FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { EmailIcon, FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
import InputList from './components/InputList';



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
    let info = {
      text: place,
      visited: false
    }
   this.setState({ 
      places: [...this.state.places, info]
    }); 
  };

  toggleComplete=(idx)=>{
    const newArray = this.state.places.slice(0)
    newArray[idx].visited = !newArray[idx].visited
    console.log(idx)
    this.setState ({
      places: newArray
    });
  }



  onChange = (e) => {  
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
      <>
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
        <InputList state={this.state} toggleComplete={this.toggleComplete}/>
         <div className="social-share">
           <div className="share-message">Share your tour!</div>
          <FacebookShareButton url={'facebook.com'}><FacebookIcon/></FacebookShareButton>
          <TwitterShareButton url={'https://twitter.com/home'}><TwitterIcon/></TwitterShareButton>
          <WhatsappShareButton url={'whatsapp.com'}><WhatsappIcon/></WhatsappShareButton>
          <EmailShareButton url={'gmail.com'}><EmailIcon/></EmailShareButton>
         </div>
       </div>
      </div> 
      </div>
      </>
     
    );
  }
}

export default App;

