import React, { Component } from 'react';

class Input extends Component {

KeyUp= (e)=>{
    if(e.keyCode ===13){
        this.props.add(e.target.value)
        e.target.value = ""
    }
}

    render() {
        return (
            <div>
                <input placeholder="请输入内容。。" onKeyUp={this.KeyUp} />
            </div>
        );
    }
}

export default Input;