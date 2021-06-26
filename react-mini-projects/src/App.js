import React from "react";
import './App.css';
import { Switch , Route } from 'react-router-dom';
import Lottery from './containers/Lottery';
import Dice from './containers/Dice';
import CoinFlipper from "./containers/CoinFlipper";
import ColorBox from "./containers/ColorBox";
import ToDoList from "./containers/ToDoList";
import CardsGenerator from "./containers/CardsGenerator";
import VendingMachine from "./containers/VendingMachine";
import Soda from './components/VendingMachine/Soda';
import Sardines from './components/VendingMachine/Sardines';
import Chips from './components/VendingMachine/Chips';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Switch>
          <Route path="/Lottery" exact component={Lottery} />
          <Route path="/Dice" component={Dice} />
          <Route path="/Coin" component={CoinFlipper} />
          <Route path="/colorBox" component={ColorBox} />
          <Route path="/todolist" component={ToDoList} />
          <Route path='/cards' component={CardsGenerator} />  
          <Route exact path='/vendingmachine' render={() => <VendingMachine />} />
          <Route exact path='/soda' render={() => <Soda />} />
          <Route exact path='/sardines' render={() => <Sardines />} />
          <Route exact path='/chips' render={() => <Chips />} />
        </Switch>
      </div>
  </React.Fragment>
  );
}

export default App;
