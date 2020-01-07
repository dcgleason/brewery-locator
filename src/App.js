import React from 'react';
import './App.css';
import CitySearch from './components/CitySearch';
import Results from "./components/Results";
import InputForm from "./components/InputForm"
import InputList from "./components/InputList"



class App extends React.Component {
  constructor(){
    super()
    this.state={
      data: [],
      info: []
    }
  }

  addItem=(e)=> {
    e.preventDefault()

   this.setState({
      info: {
        title: `${this.state.inProgress}`,
      }
    }); 
    console.log(this.state.info)
  };

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      inProgress: `${e.target.value}`
    })
    console.log(this.state.inProgress)
};

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
     <div className="app-container">
      <div className="Brewery-List">
          <CitySearch 
           onChange={this.onChange}
          />
          <Results data={this.state.data}/>
        </div>
        <div className="notes-container">
        <InputForm addItem={this.addItem} handleChange={this.handleChange} />
        <InputList/>
        </div>
      </div>
    );
  }
}

export default App;
