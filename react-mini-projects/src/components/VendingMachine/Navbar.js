import React, { Component } from 'react'
import './styles.css';
import { NavLink } from "react-router-dom";
export default class Navbar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <NavLink exact activeClassName='Navbar-active' to='/vendingMachine'>
                Home
                </NavLink>
                <NavLink exact activeClassName='Navbar-active' to='/chips'>
                Chips
                </NavLink>
                <NavLink exact activeClassName='Navbar-active' to='/soda'>
                Soda
                </NavLink>
                <NavLink exact activeClassName='Navbar-active' to='/sardines'>
                Sardines
                </NavLink>
            </div>
        )
    }
}
