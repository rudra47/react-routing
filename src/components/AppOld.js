import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './page2/Home';
import Text from './page2/Test';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='App container'>
                    <h1> React Routing </h1>

                    <Route path='/' exact render = { () => {
                        return <Home name = 'Rudra' />
                    }} />

                    <Route path = '/test' render = { () => {
                        return <Text fullName = 'Rudra Sen' />
                    }} />

                </div>
            </BrowserRouter>
        )
    }
}

export default App;
