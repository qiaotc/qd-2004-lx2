import React, { Component } from 'react';
import EventHub from "./eventHub"
class Two extends Component {

changeColor = ()=>{
        EventHub.trigger("cfone","pink")
}


    render() { 
        return (
            <div>
                two--- <button  onClick={this.changeColor} >更改颜色</button>
            </div>
        );
    }
}

export default Two;