import React from 'react';

class InputForm extends React.Component{
  constructor(props){
    super(props)

  }
  render(){
    return(
      <>
      <form onClick={this.props.addItem}>
       <label>Breweries To Go: <input type="text" name="name" onChange={this.props.handleChange}/></label>
      <input type="submit" value="Submit" />
    </form>

      </>
    )
  }
}

export default InputForm;
