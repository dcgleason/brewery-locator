import React from "react";

function CitySearch(props){
    return(
      <div className="search-container">
        <div className="search-bar">
        <form>
        <label>
          Search City for Breweries:
        <input type="text" placeholder="Type City Name" onChange={props.onChange}/>
        </label>
      </form>
        </div>
      </div>
    )
}

export default CitySearch;