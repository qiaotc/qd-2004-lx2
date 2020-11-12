import React, { Component } from 'react';
import EventHub from "./eventHub"

class One extends Component {
    state = {
        color:"red"
    }

    componentDidMount(){
          EventHub.on("cfone",color=>{
              this.setState({
                 color
              })
          })
    }
    render() {
      
        return (
            <div style={{backgroundColor:this.state.color}}>
               one 
            </div>
        );
    }
} 

export default One;