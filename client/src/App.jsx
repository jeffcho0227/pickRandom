import React from 'react';
import ListView from './ListView.jsx'
import Form from './Form.jsx';
import Axios from 'axios';

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
    }

    fetchList() {
        Axios
        .get('/api/list')
        .then(({data}) => {
            console.log(data);
            this.setState({
                itemList: data
            })
        })
        .catch(err => console.error(err));
    }

    handleClickAndDelete(id) {
        Axios
        .delete(`/api/${id}`)
        .then((data) => {
            console.log('deleted')
            this.fetchList();
            console.log('cliecked');
        })
        .catch(err => console.error(err));
    }
    
    render() {
        return (
        <div>
            <h2>Random Pick</h2>
            <Form fetchList={this.fetchList}/>
            <ListView itemList={this.state.itemList} handleClickAndDelete={this.handleClickAndDelete}/>
        </div>
        )
    }
}
