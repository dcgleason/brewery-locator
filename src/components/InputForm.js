import React from 'react';

class InputForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      text: "",
    }

  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.text)  
    this.setState({
      text: ""
    })
  }

 

  render(){
    return(
      <>
      <form onSubmit={this.handleSubmit}>
       <label> Input Tour Stops: <input type="text" name="name" onChange={this.handleChange} placeholder="E.g. Sam Adams Brewery"/></label>
      <input type="submit" value="Submit" />
    </form>

      </>
    )
  }
}

export default InputForm;
