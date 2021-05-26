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
            die2:"one",
            isRolling:false
        }
        this.roll=this.roll.bind(this);
    }
    roll(){
        this.setState({isRolling:true,
                       die1:this.props.sides[Math.floor(Math.random() * this.props.sides.length )],
                       die2:this.props.sides[Math.floor(Math.random() * this.props.sides.length )]
                    });
        setTimeout(()=>{
            this.setState({isRolling:false})
        },1000);  
    }
    render() {
        return (
            <div className="RollDie">
                <div className="dice-container">
                    <Die face={this.state.die1} rolling={this.state.isRolling} />
                    <Die face={this.state.die2} rolling={this.state.isRolling} />
                </div>
                <button onClick={this.roll} disabled={this.state.isRolling}>{this.state.isRolling ? "Rolling..." : "Roll Dice!"}</button>
            </div>
        )
    }
}
