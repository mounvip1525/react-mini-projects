import React, { Component } from 'react'
import { choice } from '../helpers';
import './styles.css';

export default class Box extends Component {
    // static defaultProps = {
    //     allColors : ["#EAD5E8" , "#D2AACF" , "#B87DB5"  , "#A0529C"  , "#8A2887" , "#682265" ,"#450F44" , "#2e1530"]
    // }
    constructor(props){
        super(props)
        this.state = {
            color: choice(this.props.colors)
        }
        this.handleClick=this.handleClick.bind(this);
    }
    pickColor(){
        let newColor;
        do {
            newColor = choice(this.props.colors);
        } while (newColor === this.state.color);
        this.setState({color:newColor})
    }
    handleClick(){
        this.pickColor();
    }
    render() {
        return (
            <div className="Box" style={{backgroundColor:this.state.color}} onClick={this.handleClick}> 

            </div>
        )
    }
}
