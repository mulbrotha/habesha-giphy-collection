import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component"
import {SearchBox} from './components/search-box/search-box.component'
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField : ''
    };
  }
  render() {
    const { monsters, searchField } =this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1> Ethio🇪🇹Giphy </h1>
        <SearchBox
         placeholder= 'Search Monsters'
          onChange= {e =>this.setState({ searchField : e.target.value})}
        />
      <CardList monsters={filteredMonsters} />
      </div>
    );
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
  }
}

export default App;
