import React from "react";
import ReactDOM from "react-dom";
import Element from "./Element";
import ElementForm from "./ElementForm";
import "./styles.css";

class App extends React.Component {
  state = {
    title: "Liste de courses",
    elements: [
      { id: 1, name: "pommes" },
      { id: 2, name: "bananes" },
      { id: 3, name: "sucre" }
    ]
  };

  handleDelete = id => {
    const elements = [...this.state.elements];
    const index = elements.findIndex(element => element.id === id);
    elements.splice(index, 1);
    this.setState({ elements });
  };

  handleAdd = element => {
    const elements = [...this.state.elements];
    elements.push(element);
    this.setState({ elements });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <ul>
          {this.state.elements.map(element => (
            <Element
              key={element.id}
              onDelete={this.handleDelete}
              details={element}
            />
          ))}
        </ul>
        <ElementForm onElementAdd={this.handleAdd} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
