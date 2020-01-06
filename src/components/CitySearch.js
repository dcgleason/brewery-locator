import React from "react";

function CitySearch(props){
    return(
        <form>
        <label>
          Search City:
        <input type="text" placeholder="Type City Name" onChange={props.onChange}/>
        </label>
        <input type="submit" value="Submit" onSubmit={props.submitFetch} />
      </form>
    )
}

export default CitySearch;