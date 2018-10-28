import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './components/home';
import Artist from './components/artist';

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/artist/:artistid" component={Artist}></Route>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));