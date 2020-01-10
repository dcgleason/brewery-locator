import React from 'react';
import InputItem from "./InputItem"

class InputList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <>
      <ol>
          {this.props.state.places.map((item, idx) => <InputItem place={item} idx={idx} toggleComplete={() => this.props.toggleComplete(idx)}/>)}   
        </ol>
      </>
    )
  }
}

export default InputList;