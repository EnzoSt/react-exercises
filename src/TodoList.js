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

    handleRemoveItem = (index) => {
        this.setState((prevState) => ({
            items: prevState.items.filter((item, idx) => idx !== index)
        }));
    };

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddItem}>
          <input name="newItem" />
          <button type="submit">Add Item</button>
          <button type="reset" onClick={this.handleResetState}>Reset</button>
        </form>
        {this.props.render(this.state.items, this.handleRemoveItem)}
      </div>
    );
  }
}