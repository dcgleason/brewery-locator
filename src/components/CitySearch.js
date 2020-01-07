import React from "react";

function CitySearch(props){
    return(
      <div className="search-container">
        <div className="search-bar">
        <form>
        <label>
          Search City:
        <input type="text" placeholder="Type City Name" onChange={props.onChange}/>
        </label>
        <input type="submit" value="Submit" onSubmit={props.submitFetch} />
      </form>
        </div>
      </div>
    )
}

export default CitySearch;