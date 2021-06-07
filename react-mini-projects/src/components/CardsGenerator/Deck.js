import React, { Component } from 'react'
import "./styles.css";
import axios from 'axios';

export default class Deck extends Component {
    constructor(props){
        super(props)
        this.state = {
            deck: null
        }
        this.getCard = this.getCard.bind(this);
    }
    async componentDidMount(){
        let deck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle")
        this.setState({
            deck : deck.data,
            drawnCards:[]
        })
        console.log("hi",this.state.deck.deck_id)
    }
    async getCard(){
        let deck_id = this.state.deck.deck_id;
        
        try{
            let cardResult = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/`);
            // console.log(cardResult.data);
            if(!cardResult.data.success) {
                throw new Error("No card remaining:(");
            }
            let card = cardResult.data.cards[0];
            this.setState(st => ({
                drawnCards: [
                    ...st.drawn, {
                        id: card.code,
                        image:card.image,
                        name:`${card.value} of ${card.suit}`
                    }
                ]
            }))
        } catch(err){
            console.log(err);
        }
    }
    render() {
        return (
            <div>
                <h2>Card Dealer</h2>
                <button onClick={this.getCard}>Get Card!</button>
            </div>
        )
    }
}
