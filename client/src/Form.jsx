import React from 'react';
import Axios from 'axios';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    let data = this.state;
    Axios
    .post('/api/createName', data)
    .then(data =>  {
      console.log(data);
      props.fetchList();
    })
    .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        First Name: <input type="text" name='firstName' onChange={(e) => {this.handleChange(e)}}/>
        Last Name: <input type="text" name='lastName' onChange={(e) => {this.handleChange(e)}}/>
        <button  type='submit'>Add</button>
        </form>
      </div>
    )
  }
}