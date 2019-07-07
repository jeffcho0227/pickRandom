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
        this.handleStateChange = this.handleStateChange.bind(this);
        this.showGenerator = this.showGenerator.bind(this);
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

    handleStateChange(state) {
        this.setState({
            page: state
        });
    }

    showDescription() {
        return (
            <Description />
        )
    }

    showGenerator() {
        return(
            <div>
                <div>
                    <div className={Style.list_view_container }>
                        <ListView itemList={this.state.itemList} handleClickAndDelete={this.handleClickAndDelete}/>
                    </div>
                    <div>
                        <Form fetchList={this.fetchList}/>
                    </div>
                    <div>
                        <Display list={this.state.itemList} fetchList={this.fetchList}/>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
        <div className={Style.main_container}>
            <div>
                <div>
                    <h1>Pick-aroo</h1>
                </div>
                <div className={Style.nav_container}>
                    <span className={this.state.page === 'Generator' ?
                                Style.nav_active : Style.nav_inactive} 
                                onClick={() => this.handleStateChange('Generator')}>
                        Generator
                    </span>
                    <span className={this.state.page === 'Description' ?
                                Style.nav_active : Style.nav_inactive} 
                                onClick={() => this.handleStateChange('Description')}>
                        How it works
                    </span>
                </div>
            </div>
            {this.state.page === 'Generator' ? 
                this.showGenerator() : this.showDescription()
            }
        </div>
        )
    }
}
