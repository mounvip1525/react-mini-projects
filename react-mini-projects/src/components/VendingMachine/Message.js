import React, { Component } from "react";
import "./styles.css";

class Message extends Component {
  render() {
    return( 
    <div className='Message'>
        {this.props.children}
    </div>
    )}
}
export default Message;
