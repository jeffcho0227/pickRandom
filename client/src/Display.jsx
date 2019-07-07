import React from 'react';
import Axios from 'axios';
import Style from './Style/Display.scss';
// import Style from './Style/App.scss';

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
      currentLastName: this.props.list[randomIndex].lastName,
    })
  }

  render() {
    return(
      <div className={Style.display_container}>
        <h3>You are it!!</h3>
        <div>
          <span className={Style.display_name}>{this.state.currentFirstName} </span>
          <span className={Style.display_name}>{this.state.currentLastName}</span>
        </div>
          <button onClick={()=> {this.handleRandomPick()}}>next?</button>
      </div>
    )
  }
}