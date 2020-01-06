import React from 'react';
import './App.css';
import CitySearch from './components/CitySearch';
import Results from "./components/Results";



class App extends React.Component {
  constructor(){
    super()
    this.state={
      data: []
    }
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
      <div className="Brewery-List">
        <CitySearch 
          onChange={this.onChange}
        />
        <Results data={this.state.data}/>
      </div>
    );
  }
}

export default App;

//fix space bar in search
// css layour of results 
// google maps 

