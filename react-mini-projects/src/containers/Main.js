import React from 'react'
import { Link } from 'react-router-dom'
import './main.css'

export default function Main() {
    return (
        <div className="main">
            <h3>React Mini Games</h3>
            <div className="card-main">
            <div className="card-box">
                <h4>Dice Roller</h4>
                <p>A simple dice roller made to understand the concept of props and simple animations</p>
                <button><Link to='/Dice'>View</Link></button>
            </div>
            <div className="card-box">
                <h4>Lottery Box</h4>
                <p>Simple react component to generate a Lottery box made to understand the concepts of stateless and stateful components</p>
                <button><Link to='/lottery'>View</Link></button>
            </div>
            <div className="card-box">
                <h4>Cards Generator</h4>
                <p>This component is made to understand the concepts of using APIs with react to generate random card from a deck</p>
                <button><Link to='/cards'>View</Link></button>
            </div>
            <div className="card-box">
                <h4>Coin Flipper</h4>
                <p>Coin flipper component demonstrates a coin flip with animations</p>
                <button><Link to='/coin'>View</Link></button>
            </div>
            <div className="card-box">
                <h4>Coin Box</h4>
                <p>Coin Box component made to implement simple random functions and managinng stateless components</p>
                <button><Link to='/colorbox'>View</Link></button>
            </div>
            <div className="card-box">
                <h4>Todo App</h4>
                <p>A todo component made to understand react forms and complex state management</p>
                <button><Link to='/todolist'>View</Link></button>
            </div>
            </div>
        </div>
    )
}
