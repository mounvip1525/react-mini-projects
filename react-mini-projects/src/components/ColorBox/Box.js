import React, { Component } from 'react'
import { choice } from '../helpers';
import './styles.css';

export default class Box extends Component {
    static defaultProps = {
        allColors : ["#53277C" , "#785CB3" , "#270C43"  , "#645394"  , "#BCB9D8" , "#BDB4D3" ,"#B89BD5" , "#5A466B"]
    }
    constructor(props){
        super(props)
        this.state = {
            color: choice(this.props.allColors)
        }
        this.handleClick=this.handleClick.bind(this);
    }
    pickColor(){
        let newColor;
        do {
            newColor = choice(this.props.allColors);
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
