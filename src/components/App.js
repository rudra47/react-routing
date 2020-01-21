import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Test from './page2/Test';

import Nav from './pages/nav';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='App container'>
                    <Nav />

                    <Switch>
                        <Route path='/' exact render = { () => {
                            return <Home name="Rudra"/>
                        }}/>
                        <Route path='/about' component={About}/>
                        <Route path='/contact' component={Contact}/>
                        <Route path='/help' component={Help}/>
                        <Route path='/posts/:postId' component={Test}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
