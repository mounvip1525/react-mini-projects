import React , { Component } from "react";
import "./styles.css";

class Die extends Component{
    render(){
        let arr = [ "one" , "two" , "three" , "four" , "five" , "six" , "one" , "two"]
        return(
            <i className={`Die fas fa-dice-${this.props.face} ${this.props.rolling ? "rolling" : ""}`}/>
        )
    };
}

export default Die;