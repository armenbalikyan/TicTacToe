import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Board } from './Components/board';
import { Scoreboard } from './Components/scoreboard';
import './Style/board.css'
import './Style/box.css'
import './Style/buttons.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Scoreboard} />
        <Route path="/board" component={Board} />
      </BrowserRouter>
    </div>
  );
}

export default App;
