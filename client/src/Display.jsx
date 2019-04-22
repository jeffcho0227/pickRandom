import React from 'react';
import Axios from 'axios';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFirstName: 'Who',
      currentLastName: 'is it?',
    }
    this.handleRandomPick = this.handleRandomPick.bind(this);
  }

  handleRandomPick() {
    let randomIndex = Math.floor(Math.random()*this.props.list.length);
    this.setState({
      currentFirstName: this.props.list[randomIndex].firstName,
      currentLastName: this.props.list[randomIndex].lirstName,
    })
  }

  render() {
    return(
      <div>
        <h3>You are it!!</h3>
        <div>
          <span>{this.state.currentFirstName}  </span>
          <span>{this.state.currentLastName}</span>
        </div>
          <button onClick={()=> {this.handleRandomPick()}}>next?</button>
      </div>
    )
  }
}