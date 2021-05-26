import React from 'react';
import './App.css';
import RollDie from './RollDie';

class App extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        num : 1
      }
      this.handleChange=this.handleChange.bind(this);
  }
  handleChange(e){
    // console.log(e.target.value);
    // let val = parseInt(e.target.value);
    // console.log(val);
    // let arr = [1];
    // for(var i=1 ; i<val;i++){
    //   arr.push(1);
    // } 
    // console.log(arr);
    // this.setState((prevState,) => ({
      
    // }));
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

export default App;
