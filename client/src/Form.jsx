import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {

  }

  handleChange(e) {
    // {name, value} = event.target;
    e.preventDefault();
    let {name, value} = e.target;
    this.setState({
      [name]: value
    }, () => {
        console.log(this.state)
    })
  }

  render() {
    return (
      <div>
        First Name: <input type="text" name='firstName' onChange={(e) => {this.handleChange(e)}}/>
        Last Name: <input type="text" name='lastName' onChange={(e) => {this.handleChange(e)}}/>
        <button>Add</button>
      </div>
    )
  }
}