import React from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem.js'

export default class ToDoList extends React.Component {
  

  toggleCompletion = (event) => {
    this.props.toggleCompletion(event);
  }

  deleteItem = (event) => {
    this.props.deleteItem(event);
  }

  toggleCheckAll = (event) => {
    this.props.toggleCheckAll(event.target.checked);
  }

  deleteAll = () => {
    this.props.deleteAll();
  }

  deleteAllChecked = () => {
    this.props.deleteAllChecked();
  }
  
  getCompletedItemsNumber = () => {
    return this.props.items.filter(item => item.completed === true).length
  }

  ListHeader = () => {
    return (
      <div className="mb-2 d-flex justify-content-between mb-4 ">
        <h2>Items</h2>
        <h2 className="d-flex justify-content-between">
          <p>{this.getCompletedItemsNumber()}/{this.props.items.length}</p>
        </h2>
      </div>
    )
  }

  ListItems = () => {
    const items = this.props.items?.map((item, index) =>
      <ToDoListItem 
        index={index}
        item={item}
        key={index}
        toggleCompletion={this.toggleCompletion}
        deleteItem={this.deleteItem}
      />
    );
    return (
      items
    )
  }

  ListItemsOperations = () => {
    const operations = (
      <div className="d-flex justify-content-between border-top pt-2 mt-2 ">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" onChange={this.toggleCheckAll}/>
        </div>
        <button className="btn btn-warning btn-sm ms-2" onClick={this.deleteAll}>
          <i class="far fa-xs fa-trash-alt"></i>
        </button>
      </div>
    )
    return operations;
  }

  ListFooter = () => {
    return (
      <div className='mt-4 d-flex justify-content-center'>
        <button
          className='btn btn-warning'
          disabled={this.getCompletedItemsNumber() === 0}
          onClick={this.deleteAllChecked}>
            Delete all checked
        </button>
      </div>
    )
  }

  render() {
    return (
      <div className="card p-3">
        {this.ListHeader()}
        {this.ListItems()}
        {this.ListItemsOperations()}
        {this.ListFooter()}
      </div>
    )
  }
}