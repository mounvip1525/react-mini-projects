import React, { Component } from 'react';
import LotteryBall from './LotteryBall';
import './styles.css';

export default class Lottery extends Component {
    render() {
        return (
            <div>
                <LotteryBall num={6}/>
                <LotteryBall num={6}/>
                <LotteryBall num={6}/>
                <LotteryBall num={6}/>
            </div>
        )
    }
}
