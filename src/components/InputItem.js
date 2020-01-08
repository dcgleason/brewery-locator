import React from 'react';

class InputItem extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <>
      <ol>
          {this.props.places.map((item, idx) => <li key={idx}>{item}</li>)
        }                 
      </ol>
      </>
    )
  }
}

export default InputItem;