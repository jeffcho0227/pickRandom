import React from 'react';
import List from './ListView.jsx'
import Form from './Form.jsx';
import Axios from 'axios';

export default class App extends React.Component{
    constructor() {
        super();
        this.state = {
            itemList: [
                {firstName: 'Jeff', lastName: 'Cho'},
                {firstName: 'Jeff', lastName: 'Cho'},
                {firstName: 'Jeff', lastName: 'Cho'}
            ],
 
        }
        this.fetchList = this.fetchList.bind(this);
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

    
    render() {
        return (
        <div>
            <h2>Random Pick</h2>
            <Form/>
            <List itemList={this.state.itemList}/>
        </div>
        )
    }
}
