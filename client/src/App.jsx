import React from 'react';
import Axios from 'axios';
import ListView from './ListView.jsx'
import Form from './Form.jsx';
import Display from './Display.jsx';

export default class App extends React.Component{
    constructor() {
        super();
        this.state = {
            itemList: [],
        }
        this.fetchList = this.fetchList.bind(this);
        this.handleClickAndDelete = this.handleClickAndDelete.bind(this);
    }

    componentDidMount() {
        this.fetchList();
        console.log(this.state.itemList)
    }

    fetchList() {
        Axios
        .get('/api/list')
        .then(({data}) => {
            this.setState({
                itemList: data
            })
        })
        .catch(err => console.error(err));
        console.log(this.state);
    }

    handleClickAndDelete(id) {
        Axios
        .delete(`/api/${id}`)
        .then((data) => {
            this.fetchList();
        })
        .catch(err => console.error(err));
    }

    render() {
        return (
        <div>
            <h2>Random Pick</h2>
            <Form fetchList={this.fetchList}/>
            <ListView itemList={this.state.itemList} handleClickAndDelete={this.handleClickAndDelete}/>
            <Display list={this.state.itemList} fetchList={this.fetchList}/>
        </div>
        )
    }
}
