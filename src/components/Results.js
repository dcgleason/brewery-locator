import React from "react";
import ResultsItem from "./ResultsItem"


function Results(props){
    return(
        <div className="card-container">
        {props.data.map(item => <div>
            <ResultsItem name={item.name} street={item.street} city={item.city} state={item.state} phone={item.phone} website={item.website_url}/>
            </div>
        )}
        </div>
    
    )
}

export default Results;
