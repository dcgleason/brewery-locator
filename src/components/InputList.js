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
             <InputItem info={this.props.info}/>
        </ul>
      </div>
    )
  }
}

export default InputList;