import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <div>
              {
                  this.props.list.map(item=>{
                  return  <p key={item.id}> {item.title}</p>
                  })
              }
            </div>
        );
    }
} 

export default List;