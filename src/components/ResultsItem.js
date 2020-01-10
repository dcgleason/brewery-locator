import React from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ReactCardFlip from 'react-card-flip';



class ResultsItem extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
        isFlipped: false
      };
    }
   
    handleClick = (e) => {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }


    render() {
        return(
        <>
        <div className="card">
         <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <Card style={{ width: '15rem' }}>
                <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Text>
                 
                </Card.Text>
                 <Button onClick={this.handleClick} variant="primary">Flip for More Info</Button>
                </Card.Body>
             </Card>

             <Card style={{ width: '15rem' }}>
                <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Text>
                 {this.props.street} <br/> {this.props.city}, {this.props.state} <br/> <b>Phone Number:</b>{this.props.phone} <a href={this.props.website} target={"_blank"}>Website</a>
                </Card.Text>
                 <Button onClick={this.handleClick} variant="primary">To Front</Button>
                </Card.Body>
             </Card>
        </ReactCardFlip>     
        </div>
        </>
         )
        }

        }

export default ResultsItem;
