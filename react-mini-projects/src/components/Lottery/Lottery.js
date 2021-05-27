import React, { Component } from 'react';
import LotteryBall from './LotteryBall';

export default class LotteryBox extends Component {
    static defaultProps = {
        title: "Your Lottery Box",
        maxNum:40,
        numBalls:6
    }
    constructor(props){
        super(props)
        this.state = {
            num : Array.from({length:this.props.numBalls})
        }
        this.handleClick=this.handleClick.bind(this);
    }
    generate(){
        this.setState(curState=>({
            num: curState.num.map(n=>(Math.floor(Math.random() * this.props.maxNum))+1)
            })
        )
    }
    handleClick(){
        this.generate();
    }
    render() {
        return (
            <div className="Lottery">
                <h3>{this.props.title}</h3>
                <div>
                    {this.state.num.map(n=>{
                        return <LotteryBall num={n} />
                    })}
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </div>
        )
    }
}
