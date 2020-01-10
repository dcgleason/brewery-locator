import React from 'react';

class InputItem extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <>
          <li className={this.props.place.visited? 'text' : ""} key={this.props.idx}>{this.props.place.text}</li><button onClick={this.props.toggleComplete}>Visited</button> 
      </>
    )
  }
}

export default InputItem;