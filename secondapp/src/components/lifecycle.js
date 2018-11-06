// 1 Get default state
// 2 set initila state
// 3 before get created
// 4 Render jsx
// 5 After component mounted

import React, { Component } from 'react';

class Lifecycle extends Component{
    // 1 Get default state
    constructor(props){
        super(props)

        // 2 set initila state
        this.state={
            title: 'Taking lifecycle'
        }

    }

    // 3 before get created
    componentWillMount(){
        console.log('before component created')
        
    }

    // 4 Render jsx
    render(){
        return(
            <div>
                <h4>{this.state.title}</h4>
            </div>
        )
    }

    // 5 After component mounted
    componentDidMount(){
        console.log('after component created')
        document.querySelector('h4').style.color="red"
        
    }

    

}

export default Lifecycle;