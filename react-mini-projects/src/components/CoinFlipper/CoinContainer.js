import React, { Component } from 'react'
import './styles.css'
import Coin from './Coin';
import { choice } from './helpers';

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
        this.handleClick=this.handleClick.bind(this);
    }
    flipCoin(){
        //returns a random side of the coin ex. {side:"heads",imgSrc:"https..."}
        let newCoin = choice(this.props.coin);
        // this.setState(st=>{
        //     let newState = {
        //         ...st,
        //         curCoin:newCoin,
        //         nFlips:st.nFlips+1
        //     }
        //     if(newCoin.side==="heads"){
        //         newState.nHeads += 1;
        //     } else {
        //         newState.nTails += 1;
        //     }
        //     return newState
        // });
        this.setState(st=>{
            return{
                curCoin:newCoin,
                nFlips:st.nFlips+1,
                nHeads:st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails:st.nTails + (newCoin.side === "tails" ? 1 : 0),
            };
        })
    }
    handleClick(){
        this.flipCoin();
    }
    render() {
        return (
            <div className="coin-container">
                <h3>Lets Flip a Coin!</h3>
                <Coin coin={this.state.curCoin} />
                <button onClick={this.handleClick}>Flip</button>
                <p>Out of {this.state.nFlips} trials , there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p>
            </div>
        )
    }
}
