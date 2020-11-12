import React, { Component } from 'react';
import  One from "./One"
import  Two from "./Two"

class Other extends Component {
    render() {
        return (
            <div>
               <One/>
               <Two/>
            </div>
        );
    }
}

Other.propTypes = {

};

export default Other;