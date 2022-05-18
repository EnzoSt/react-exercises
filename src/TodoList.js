import React from "react";

export class TodoList extends React.Component {
  state = {
    items: [],
  };

  handleAddItem = (event) => {
    event.preventDefault();
    const newItem = event.target.elements.newItem.value;
    if (newItem.length > 0) {
      this.setState((prevState) => ({
        items: [...prevState.items, newItem],
      }));
      event.target.elements.newItem.value = "";
    }
  };

  handleResetState = () => {
    this.setState({
        items: [],
    })
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddItem}>
          <input name="newItem" />
          <button type="submit">Add Item</button>
          <button type="reset" onClick={this.handleResetState}>Reset</button>
        </form>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={item + index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}