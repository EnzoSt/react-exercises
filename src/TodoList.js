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
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddItem}>
          <input name="newItem" />
          <button type="submit">Add Item</button>
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
