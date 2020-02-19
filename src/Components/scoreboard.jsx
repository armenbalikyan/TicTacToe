import React from "react";
import { Link } from "react-router-dom";
import { Storage } from "../Storage/storage";
import "bootstrap/dist/css/bootstrap.min.css";

export class Scoreboard extends React.Component {
  state = {
    scoreboard: []
  };

  // After component mounts, load any data from local storage and update component state
  async componentDidMount() {
    let storage = await new Storage().getData();

    this.setState({
      scoreboard: storage
    });
  }

  render() {
    return (
      <div className="game">
        {/* List with previous games */}
        <div class="card text-white bg-warning mb-3">
          <div class="card-header">
            <p>
              <i>Tic Tac Toe</i>
            </p>
          </div>
          <div class="card-body">
            <h5 class="card-title">Recent games:</h5>
            <h6 class="card-text">
              {this.state.scoreboard.map((leader, key) => {
                return <li key={key}>{leader}</li>;
              })}
            </h6>
            {/* Link to start new game */}
            <a href="/board" class="btn btn-primary">
              New Game
            </a>
          </div>
          <div class="card-footer">
            <i>Created By Armen Balikyan </i>
          </div>
        </div>
      </div>
    );
  }
}
