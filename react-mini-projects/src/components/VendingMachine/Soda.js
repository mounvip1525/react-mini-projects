import React, { Component } from "react";
import Message from "./Message";
import { Link } from "react-router-dom";
import sodaImg from "../../assets/Soda.png";
import "./styles.css";

class Soda extends Component {
  render() {
    return (
      <div className='Soda'>
        <img src={sodaImg} alt='coca cola can' />
        <Message>
          <h3>Let's get a soda</h3>
          <p>(It's bad for your health tho)</p>
          <Link to='/vendingMachine'>Go Back</Link>
        </Message>
        <img src={sodaImg} alt='coca cola can' />
      </div>
    );
  }
}

export default Soda;
