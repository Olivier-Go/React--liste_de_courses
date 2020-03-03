import React, { Component } from "react";

// Class Component
class ElementForm extends Component {
  state = {
    elementInput: ""
  };

  handleChange = evt => {
    const value = evt.currentTarget.value;
    this.setState({ elementInput: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const id = new Date().getTime();
    const name = this.state.elementInput;
    if (name.trim() !== "") {
      this.props.onElementAdd({ id, name });
    }
    this.setState({ elementInput: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.elementInput}
          onChange={this.handleChange}
          type="text"
          placeholder="Ajouter un élément"
        />
        <button>Ajouter</button>
      </form>
    );
  }
}

export default ElementForm;
