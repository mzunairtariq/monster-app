// import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card/card.jsx";
import "./components/card-list/card-list.styles.css";

import React, { Component } from "react";

// import { CardList } from "./components/card-list/card-list.jsx";

import "./App.css";
import SearchBaar from "../src/components/search/search-baar.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        
      ],
      searchText: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((jsonData) => {
        return jsonData.json();
      })
      .then((data) => {
        this.setState({ monsters: data });
      });
  }

  render() {
    const {monsters, searchText} = this.state;
    const filteredMonsters = monsters?.filter((monster) => {
      return monster.name.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
      <div>
        <div className="App">
          <h1>Monsters Rolodex</h1>

          {/* <SearchBaar name={this.state.monsters.name} /> */}
          <input
            className="inputStyles"
            type="text"
            placeholder="Search Here.........."
            onChange={(event) => {
              this.setState({ searchText: event.target.value });
            }}
          />

          <div className="card-list">
            {filteredMonsters.map((monster) => (
              <Card
                key={monster.id}
                id={monster.id}
                name={monster.name}
                email={monster.email}
                
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
