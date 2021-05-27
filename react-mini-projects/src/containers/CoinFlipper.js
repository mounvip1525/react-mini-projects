import React, { Component } from 'react'
import CoinContainer from '../components/CoinFlipper/CoinContainer'

export default class CoinFlipper extends Component {
    render() {
        return (
            <div>
                <h1>Coin Flipper</h1>
                <CoinContainer />
            </div>
        )
    }
}
