import React from 'react';
import Axios from 'axios';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFirstName: 'sdjfa',
      currentLastName: 'asdf',
      list: []
    }
    this.handleRandomPick = this.handleRandomPick.bind(this);
    // console.log(props);
  }

  // componentDidMount() {
  //   props.fetchList();
  // }

  handleRandomPick() {
    Axios
    .get('/api/list')
    .then(({data}) => {
        let randomIndex = Math.floor(Math.random()*data.length);
        this.setState({
            currentFirstName: data[randomIndex].firstName,
            currentLastName: data[randomIndex].lastName,
        })
    })
    .catch(err => console.error(err));
    // console.log(randomIndex)
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