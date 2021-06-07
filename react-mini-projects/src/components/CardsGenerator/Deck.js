import React, { Component } from 'react'
import "./styles.css";
import axios from 'axios';
import Card from './Card';

export default class Deck extends Component {
    constructor(props){
        super(props)
        this.state = {
            deck: null,
            drawnCards:[]
        }
        this.getCard = this.getCard.bind(this);
    }
    async componentDidMount(){
        let deck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle")
        this.setState({
            deck : deck.data
        })
        console.log("hi",this.state.deck.deck_id)
    }
    async getCard(){
        console.log(this.state.deck.deck_id);
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
                    ...st.drawnCards, {
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
        const cards = this.state.drawnCards.map(card=>(
            <Card name={card.name} key={card.id} image={card.image} />
        ))
        return (
            <div>
                <h2>Card Dealer</h2>
                <button onClick={this.getCard}>Get Card!</button>
                <div className="Deck">{cards}</div>
            </div>
        )
    }
}
