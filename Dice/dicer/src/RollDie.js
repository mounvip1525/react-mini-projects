import React, { Component } from 'react';
import Die from './Die';
import "./Die.css";

export default class RollDie extends Component {
    static defaultProps = {
        sides : [ "one" , "two" ,"three" , "four" , "five" , "six" ]
    }
    constructor(props){
        super(props)
        this.state = {
            die1: "one",
            die2:"one"
        }
        this.roll=this.roll.bind(this);
    }
    roll(){
        this.setState({die1:this.props.sides[Math.floor(Math.random() * this.props.sides.length )],
                       die2:this.props.sides[Math.floor(Math.random() * this.props.sides.length )]});
        
    }
    render() {
        return (
            <div className="RollDie">
                <div className="dice-container">
                    <Die face={this.state.die1} />
                    <Die face={this.state.die2} />
                    <Die face={this.state.die1} />
                    <Die face={this.state.die2} />
                    <Die face={this.state.die1} />
                    <Die face={this.state.die2} />
                </div>
                <button onClick={this.roll}>Roll Die</button>
            </div>
        )
    }
}
