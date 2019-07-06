import React from 'react';
import Axios from 'axios';
import ListView from './ListView.jsx'
import Form from './Form.jsx';
import Display from './Display.jsx';
import Description from './Description.jsx';
import Style from './Style/App.scss';

export default class App extends React.Component{
    constructor() {
        super();
        this.state = {
            itemList: [],
            page: 'Generator'
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
        <div className={Style.container}>
            <div className={Style.item_nav}>
                <span className={Style.nav_item}>
                    Generator
                </span>
                <span className={Style.nav_item}>
                    Description
                </span>
            </div>
            <div className={Style.item_header}>
                <h1>Can't decide? Let me help you</h1>
            </div>
            <div className={Style.item_form}>
                <Form fetchList={this.fetchList}/>
            </div>
            <div className={Style.item_list}>
                <ListView itemList={this.state.itemList} handleClickAndDelete={this.handleClickAndDelete}/>
            </div>
            <div className={Style.item_display}>
                <Display list={this.state.itemList} fetchList={this.fetchList}/>
            </div>
            
        </div>
        )
    }
}
