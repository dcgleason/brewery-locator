import React from "react";
import ResultItem from "./ResultsItem"

function Results(props){
    return(
        <div>
           <ResultItem data={props.data}/>
        </div>
    )
}

export default Results;