import React from "react";
import ToDoListItem from "../ToDoListItem/ToDoListItem.js";


export default class ToDoItems extends React.Component {
  toggleCompletion = (event) => {
    this.props.toggleCompletion(event);
  };

  deleteItem = (event) => {
    this.props.deleteItem(event);
  };

  saveItemEdit = (index, newText) => {
    this.props.saveItemEdit(index, newText)
  }

  render() {
    const items = this.props.items?.map((item, index) => (
      <ToDoListItem
        index={index}
        item={item}
        key={index}
        toggleCompletion={this.toggleCompletion}
        deleteItem={this.deleteItem}
        saveItemEdit={this.saveItemEdit}
      />
    ));
    return items;
  }
}