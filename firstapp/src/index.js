import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import NewsList from './components/newsList';
import JSON from './db.json';

class App extends Component{

    constructor(props){
        super(props)

        this.state = {
            news:JSON,
            filtered: JSON
        }
    }

    filterNews(keywords){
        console.log("coming in index"+ keywords)
        let filtered = this.state.news.filter((data)=>{
            return data.title.indexOf(keywords) > -1
        })

        this.setState({filtered:filtered})
    }

    render(){
        return(
            <div>
                <Header newsSearch={(keyword)=>this.filterNews(keyword)}/>
                <NewsList sendNews={this.state.filtered}/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))



/*
const App = () => {
    console.log(JSON)
    return(
        <div>
            <Header/>
            <NewsList/>
        </div>
    )
}
*/