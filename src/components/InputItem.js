import React from 'react';

class InputItem extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      <>
      <div>{this.props.info.title}</div>
      </>
    )
  }
}

export default InputItem;