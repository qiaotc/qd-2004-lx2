import React, { Component } from 'react';
import List from './List'
import Input from './Input'

class Todos extends Component {
    constructor(){
        super()
        this.state = {
            list:[
                {id:1,title:'我shi1'},
                {id:2,title:'我说sad事实上'},
                {id:3,title:'我说事sd实上'},
                {id:4,title:'我das 说事实上'}
            ]
        }
    }
add = title =>{
    this.setState({
        list:[...this.state.list,{id:6,title}]
    })
}

    render() {
        return (
            <div>
                <Input add={this.add} />
                <List list={this.state.list} />

            </div>
        );
    }
}

export default Todos;