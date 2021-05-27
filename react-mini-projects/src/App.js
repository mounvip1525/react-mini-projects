import React from "react";
import './App.css';
import { Switch , Route } from 'react-router-dom';
import Lottery from './containers/Lottery';
import Dice from './containers/Dice';
import CoinFlipper from "./containers/CoinFlipper";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Switch>
          <Route path="/Lottery" exact component={Lottery} />
          <Route path="/Dice" component={Dice} />
          <Route path="/Coin" component={CoinFlipper} />
        </Switch>
      </div>
  </React.Fragment>
  );
}

export default App;
