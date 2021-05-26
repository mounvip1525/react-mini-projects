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
            die2: "two",
            die3: "three",
            die4: "four",
            die5: "five",
            die6: 'six',
            die7: "one",
            die8: 'one',
            isRolling:false,
            s : ["one","two","three","four","five","six","seven","eight"]
        }
        this.roll=this.roll.bind(this);
    }
    roll(){
        this.setState({isRolling:true,
                       s:[this.props.sides[Math.floor(Math.random() * this.props.sides.length )],this.props.sides[Math.floor(Math.random() * this.props.sides.length )],this.props.sides[Math.floor(Math.random() * this.props.sides.length )],this.props.sides[Math.floor(Math.random() * this.props.sides.length )],this.props.sides[Math.floor(Math.random() * this.props.sides.length )],this.props.sides[Math.floor(Math.random() * this.props.sides.length )],this.props.sides[Math.floor(Math.random() * this.props.sides.length )],this.props.sides[Math.floor(Math.random() * this.props.sides.length )]]
                    });
        setTimeout(()=>{
            this.setState({isRolling:false})
        },1000);  
    }
    render() {
        let num = [1];
        console.log(this.props.num);
        let arr = [1] ; 
        for(var i=1 ; i< this.props.num ; i++) {
            arr.push(1);
        }
        console.log("arr",arr);
        return (
            <div className="RollDie">
                <div className="dice-container">
                {arr.map((a,index)=>{
                    return <Die face={`${this.state.s[index]}`} rolling={this.state.isRolling} key={index} />
                })}
                </div>
                <button onClick={this.roll} disabled={this.state.isRolling}>{this.state.isRolling ? "Rolling..." : "Roll Dice!"}</button>
            </div>
        )
    }
}
