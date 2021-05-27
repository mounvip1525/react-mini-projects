import React, { Component } from 'react';
import Die from './Die';
import "./styles.css";

export default class RollDie extends Component {
    static defaultProps = {
        sides : [ "one" , "two" ,"three" , "four" , "five" , "six" ]
    }
    constructor(props){
        super(props)
        this.state = {
            isRolling:false,
            sides : ["one","two","three","four","five","six","one","two"]
        }
        this.roll=this.roll.bind(this);
    }
    roll(){
        this.setState({isRolling:true,
                       sides:[this.props.sides[Math.floor(Math.random() * 6 )],
                              this.props.sides[Math.floor(Math.random() * 6 )],
                              this.props.sides[Math.floor(Math.random() * 6 )],
                              this.props.sides[Math.floor(Math.random() * 6 )],
                              this.props.sides[Math.floor(Math.random() * 6 )],
                              this.props.sides[Math.floor(Math.random() * 6 )],
                              this.props.sides[Math.floor(Math.random() * 6 )],this.props.sides[Math.floor(Math.random() * this.props.sides.length )]]
                    });
        setTimeout(()=>{
            this.setState({isRolling:false})
        },1000);  
    }
    render() {
        let arr = [1] ; 
        for(var i=1 ; i< this.props.num ; i++) {
            arr.push(1);
        }
        return (
            <div className="RollDie">
                <div className="dice-container">
                {arr.map((a,index)=>{
                    return <Die face={`${this.state.sides[index]}`} rolling={this.state.isRolling} key={index} />
                })}
                </div>
                <button onClick={this.roll} disabled={this.state.isRolling}>{this.state.isRolling ? "Rolling..." : "Roll Dice!"}</button>
            </div>
        )
    }
}
