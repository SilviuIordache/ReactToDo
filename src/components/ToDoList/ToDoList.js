import React from "react";
import ToDoListItem from "../ToDoListItem/ToDoListItem.js";

export default class ToDoList extends React.Component {
  toggleCompletion = (event) => {
    this.props.toggleCompletion(event);
  };

  deleteItem = (event) => {
    this.props.deleteItem(event);
  };

  editItem = (event) => {
    this.props.editItem(event);
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
    if (this.props.items.length === 0)
      return false
    return this.getCompletedItemsNumber() === this.props.items.length;
  };

  ListHeader = () => {
    let className = "mb-2 d-flex justify-content-between mb-4";
    if (this.allItemsCompleted()) {
      className += " text-success";
    }
    return (
      <div className={className}>
        <div className="d-flex">
          <h2>Completed</h2>
          {this.allItemsCompleted() && <i className="fas fa-2x fa-check ms-2"></i>}
        </div>
        <h2 className="d-flex justify-content-between">
          <p>
            {this.getCompletedItemsNumber()}/{this.props.items.length}
          </p>
        </h2>
      </div>
    );
  };

  ListItems = () => {
    const items = this.props.items?.map((item, index) => (
      <ToDoListItem
        index={index}
        item={item}
        key={index}
        toggleCompletion={this.toggleCompletion}
        deleteItem={this.deleteItem}
        editItem={this.editItem}
      />
    ));
    return items;
  };

  ToggleCheckAll = () => {
    return (
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          onChange={this.toggleCheckAll}
          disabled={this.props.items.length === 0}
        />
      </div>
    )
  }

  DeleteAll = () => {
    return (
      <button
        className="btn btn-danger btn-sm ms-2 px-3"
        onClick={this.deleteAll}
        disabled={this.props.items.length === 0}
      >
      <i className="far fa-xs fa-trash-alt"></i>
    </button>
    )
  }

  DeleteAllChecked = () => {
    return (
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-warning d-flex align-items-center py-2"
          disabled={this.getCompletedItemsNumber() === 0}
          onClick={this.deleteAllChecked}
        >
          <i className="far fa-xs fa-trash-alt"></i>
          <span className="mx-2">all</span>
          <input type='checkbox' checked readOnly></input>
        </button>
      </div>
    );
  };

  ListFooter = () => {
    const operations = (
      <div className="d-flex justify-content-between align-items-center border-top pt-2 mt-2 ">
       {this.ToggleCheckAll()}
       <div className="d-flex">
        {this.DeleteAllChecked()}
        {this.DeleteAll()}
       </div>
      </div>
    );
    return operations;
  };

 

  render() {
    return (
      <div className="card bg-white p-4">
        {this.ListHeader()}
        {this.ListItems()}
        {this.ListFooter()}
      </div>
    );
  }
}
