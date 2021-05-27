import React, { Component } from 'react';
import LotteryBall from "../components/Lottery/LotteryBall";
import Lottery from '../components/Lottery/Lottery';

export default class LotteryBox extends Component {
    static defaultProps = {
        title: "Your Lottery Box",
        maxNum:40,
        numBalls:6
    }
    constructor(props){
        super(props)
        this.state = {
            num : []
        }
        this.handleClick=this.handleClick.bind(this);
    }
    generate(){

    }
    handleClick(){
        this.generate();
    }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <Lottery />
                <button onClick={this.handleClick}>Generate</button>
            </div>
        )
    }
}
