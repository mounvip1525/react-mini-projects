import React, { Component } from 'react';
import Lottery from '../components/Lottery/Lottery';

export default class LotteryBox extends Component {
    render() {
        return (
            <div>
                <h2>Lottery Generator</h2>
                <Lottery />
                <Lottery title='Mini Lottery Box' numBalls={4} maxNum={10} />
            </div>
        )
    }
}
