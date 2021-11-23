import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
//component cannot change the props - they're read-only.
class App extends Component {
  state = {
    characters: [],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  handlesubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handlesubmit} />
      </div>
    );
  }
}

export default App;
//Let's make sure we pass that(handleSubmit) through as a parameter on Form.

/*STATE--You can think of state as any data that should be saved and modified without necessarily 
being added to a database - for example, adding and removing items from a shopping cart before confirming your purchase.*/
