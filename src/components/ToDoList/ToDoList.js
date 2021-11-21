import React from "react";
import ToDoItems from "../ToDoItems/ToDoItems.js";
import ListFooter from "./ListFooter";
import ListHeader from "./ListHeader";

export default class ToDoList extends React.Component {
  toggleCompletion = (event) => {
    this.props.toggleCompletion(event);
  };

  deleteItem = (event) => {
    this.props.deleteItem(event);
  };

  saveItemEdit = (index, newText) => {
    this.props.saveItemEdit(index, newText);
  };

  toggleCheckAll = (event) => {
    this.props.toggleCheckAll(event.target.checked);
  };

  deleteAll = () => {
    this.props.deleteAll();
  };

  deleteAllChecked = () => {
    this.props.deleteAllChecked();
  };

  getCompletedItemsNumber = () => {
    return this.props.items.filter((item) => item.completed === true).length;
  };

  allItemsCompleted = () => {
    if (this.props.items.length === 0) return false;
    return this.getCompletedItemsNumber() === this.props.items.length;
  };

  render() {
    return (
      <div className="card bg-white p-4">
        <ListHeader
          allCompleted={this.allItemsCompleted}
          completedItemsCount={this.getCompletedItemsNumber()}
          totalItems={this.props.items.length}
        />
        <ToDoItems
          items={this.props.items}
          toggleCompletion={this.toggleCompletion}
          deleteItem={this.deleteItem}
          saveItemEdit={this.saveItemEdit}
        />
        <ListFooter
          items={this.props.items}
          deleteAll={this.deleteAll}
          toggleCheckAll={this.toggleCheckAll}
          deleteAllChecked={this.deleteAllChecked}
        />
      </div>
    );
  }
}
