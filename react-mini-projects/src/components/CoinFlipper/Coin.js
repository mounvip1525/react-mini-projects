import React, { Component } from 'react';
import './styles.css'

import heads from '../../assets/head.png';
import tails from '../../assets/tail.png';
export default class Coin extends Component {
    render() {
        return (
            <div>
                <img src={this.props.coin.side === "heads" ? heads : tails } alt={this.props.coin.side} className="coin"/>
            </div>
        )
    }
}
