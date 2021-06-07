import React, { Component } from 'react'
import Deck from '../components/CardsGenerator/Deck'
import '../components/CardsGenerator/styles.css'

export default class CardsGenerator extends Component {
    render() {
        return (
            <div className="wrapper">
                <Deck />
            </div>
        )
    }
}
