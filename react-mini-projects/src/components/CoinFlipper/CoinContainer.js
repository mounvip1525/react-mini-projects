import React, { Component } from 'react'
import './styles.css'
import Coin from './Coin';
import { choice } from './helpers';
import heads from '../../assets/head.png';
import tails from '../../assets/tail.png';

export default class CoinContainer extends Component {
    static defaultProps = {
        coin : [
            {
                side : "heads"
            },
            {
                side : "tails"
            }
        ]
    }
    constructor(props){
        super(props)
        this.state = {
            curCoin:null,
            nFlips:0,
            nHeads:0,
            nTails:0,
            isFlipping:false
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
                isFlipping:true,
                curCoin:newCoin,
                nFlips:st.nFlips+1,
                nHeads:st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails:st.nTails + (newCoin.side === "tails" ? 1 : 0),
            };
        })
        setTimeout(()=>{
            this.setState({isFlipping:false})
        },1000);
    }
    handleClick(){
        this.flipCoin();
    }
    render() {
        return (
            <div className="coin-container">
                <h3>Lets Flip a Coin!</h3>
                {this.state.curCoin && 
                <Coin coin={this.state.curCoin} isFlipping={this.state.isFlipping} />
                }
                <button onClick={this.handleClick} disabled={this.state.isFlipping}>Flip</button>
                <p>Out of <b>{this.state.nFlips}</b> trials , there have been <b>{this.state.nHeads}</b> heads and <b>{this.state.nTails}</b> tails.</p>
            </div>
        )
    }
}
