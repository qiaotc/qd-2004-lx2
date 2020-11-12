import React, { Component } from 'react';
import axios from 'axios'
class Todolist extends Component {
    state = {
        list: [],
        username: "",
        age: 0
    }
    componentDidMount() {
        axios.get("http://localhost:4000/list").then(res => {
            this.setState({
                list: res.data
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

getData= ()=>{
    axios.get("http://localhost:4000/list").then(res => {
        this.setState({
            list: res.data
        })
    })
}

    add = () => {
        axios.post("http://localhost:4000/list", {
            username: this.state.username,
            age: this.state.age
        }).then(res => {
            this.getData()
            this.setState({
                username:''
            })
        })
    }
    
    
    delete=(id)=>{
        axios.delete("http://localhost:4000/list/"+id).then(res=>{
            this.getData()
        })
    }


    update=({id,username,age})=>{
        let value =  prompt("......",username+","+age)
        let arr =value.split(",")
        axios.patch("http://localhost:4000/list/"+id,{
            username:arr[0],
            age:arr[1]
        }).then(res=>{ 
            this.getData()
        })
    }
 
    render() {
        let { username, age } = this.state
        return (

            <div>
                <input type="text" id="username" value={username} onChange={this.handleChange} placeholder="请输入姓名" />
                <input type="number" id="age" value={age} onChange={this.handleChange} placeholder="请输入年龄" />
                <button onClick={this.add}> 添加</button>
                <ul>
                    {
                        this.state.list.map(item => {
                            return <li key={item.id}>{item.username}-------{item.age} 
                            <button onClick={this.delete.bind(this,item.id)} >删除</button>
                            <button onClick={this.update.bind(this,item)}>修改</button>
                            </li>
                        })
                    }

                </ul>
            </div>
        );
    }
}

export default Todolist; 