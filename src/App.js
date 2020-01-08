import React from 'react';
import './App.css';
import CitySearch from './components/CitySearch';
import Results from "./components/Results";
import InputForm from "./components/InputForm"
import InputItem from "./components/InputItem"



class App extends React.Component {
  constructor(){
    super()
    this.state={
      data: [],
      places: [],
      inProgress: ``
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
     <div className="app-container">
      <div className="Brewery-List">
          <CitySearch 
           onChange={this.onChange}
          />
          <Results data={this.state.data}/>
        </div>
        <div className="notes-container">
        <InputForm onSubmit={this.addItem}/>
        <InputItem places={this.state.places}/>
        </div>
      </div>
    );
  }
}

export default App;

//figure out how to add more than one item to make a list, make the UI nice (brewery 1, brewery 2, etc)
// figure out how to make the css so that a htird of the screen is the togo to note section
