import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import App from './App';
import Profile from './components/porfile';
import Post from './components/post';
import PostItem from './components/post_item';
import LifeCycle from './components/lifecycle';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <header>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span> 
                    </button>
                    <a class="navbar-brand" href="#">React App</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/post">Post</Link></li> 
                        <li><Link to="/profile">Profile</Link></li> 
                        <li><Link to="/lifecycle">LifeCycle</Link></li> 
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
            </header>
            <Route exact path="/" component={App}></Route>
            <Route path="/home" component={App}></Route>
            <Route exact path="/post" component={Post}></Route>
            <Route path="/post/:id" component={PostItem}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/lifecycle" component={LifeCycle}></Route>
        </div>
    </BrowserRouter>, document.getElementById('root'));

