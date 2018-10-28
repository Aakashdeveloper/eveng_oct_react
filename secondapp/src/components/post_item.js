import React, {Component } from 'react';

class PostItem extends Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props);
        return(
            <div className="panel panel-danger">
                <div className="panel-heading">
                    Post Detail
                </div>
                <div className="panel-body">
                Post detail page for {this.props.match.params.id}
                </div>
            </div>
        )
    }
}

export default PostItem;