import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const style = {
    color: 'black',
    fontWeight: 'bold'
}

const Nav = () => {
    return (
        <nav style = { {padding: '20px'} }>
            <NavLink activeStyle = {style} to='/' exact> Home </NavLink>
            <NavLink activeStyle = {style} to='/About'> About </NavLink>
            <NavLink activeStyle = {style} to='/Contact'> Contact </NavLink>
            <NavLink activeStyle = {style} to='/Help'> Help </NavLink>
        </nav>
    )
}

export default Nav;