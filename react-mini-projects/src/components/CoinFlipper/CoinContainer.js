import React, { Component } from 'react'
import './styles.css'
import Coin from './Coin';

export default class CoinContainer extends Component {
    static defaultProps = {
        coin : [
            {
                side : "heads" , imgSrc : "../../assets/head.png"
            },
            {
                side : "tails" , imgSrc : "../../assets/head.png"
            }
        ]
    }
    constructor(props){
        super(props)
        this.state = {
            curCoin:null,
            nFlips:0,
            nHeads:0,
            nTails:0
        }
    }
    render() {
        return (
            <div className="coin-container">
                <h3>Lets Flip a Coin!</h3>
                <Coin coin={this.state.curCoin} />
                <button>Flip</button>
                <p>Out of {this.state.nFlips} trials , there have been {this.state.nHeads} heads and {this.state.nHeads} tails.</p>
            </div>
        )
    }
}
