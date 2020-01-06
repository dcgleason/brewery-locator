import React from "react";

function Results(props){
    return(
        <div>
            {props.data.map(item => <div>{item.name} | {item.street} | {item.city} | {item.state}</div>)}
        </div>
    )
}

export default Results;