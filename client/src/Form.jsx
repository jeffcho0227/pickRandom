import React from 'react';
import Axios from 'axios';
import Style from './Style/Form.scss';

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
    e.preventDefault();
    let data = this.state;
    if (this.state.firstName === '' || this.state.lastName === '') {
      alert('please fill in one of the fields')
    } else {
      Axios
      .post('/api/createName', data)
      .then(data =>  {
        console.log(data);
        this.props.fetchList();
      })
      .catch(err => console.error(err));
    }
  }

  render() {
    return (
      <div className={Style.form_container}>
        <h3>Add someone to the List</h3>
        <form className={Style.form_input} onSubmit={this.handleSubmit}>
          <div>
            First Name: <input type="text" name='firstName' onChange={(e) => {this.handleChange(e)}}/>
          </div>
          <div>
            Last Name: <input type="text" name='lastName' onChange={(e) => {this.handleChange(e)}}/>
          </div>
        <button  type='submit'>Add</button>
        </form>
      </div>
    )
  }
}