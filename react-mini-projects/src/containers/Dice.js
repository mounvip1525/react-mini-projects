import React from 'react';
import '../App.css';
import RollDie from "../components/Dice/RollDie";

class Dice extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        num : 1
      }
      this.handleChange=this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({num:parseInt(e.target.value)})
  }
  render(){
  return (
    <div className="App">
      <div className='dropdown'>
        <label htmlFor="range">How many Dice? </label>
        <input type="text" placeholder="Max 8" onChange={(e)=>this.handleChange(e)} />
      </div>
      <RollDie num={this.state.num}/>
    </div>
  );
  }
}

export default Dice;
