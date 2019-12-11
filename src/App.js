import React, {Component} from 'react';
import Table from './table';
import Form from "./form";
import Api from "./Api";

import './App.css';


class App extends Component {

  state = {
    characters: []
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((characters, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }
  
  render() {
    const { characters } = this.state

    return(
      <div className="App">
        <h1>Hitlist</h1>
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit = {this.handleSubmit}/>
        {/* <Api /> */}
      </div>
    )
  }
}


export default App;
