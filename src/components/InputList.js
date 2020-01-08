import React from 'react';
import InputItem from './InputItem';

class InputList extends React.Component{
  constructor(props){
    super(props)

  }


  render(){
   
    return(
        <div>
         <ul>
             <InputItem places={this.props.places}/>
        </ul>
      </div>
    )
  }
}

export default InputList;