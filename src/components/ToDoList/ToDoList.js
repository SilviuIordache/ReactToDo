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
  
  getCompletedItems = () => {
    return this.props.items.filter(item => item.completed === true).length
  }

  ListHeader = () => {
    return (
      <h2 className="mb-2 d-flex justify-content-between mb-4">
        <span>Items</span>
        <span>{this.getCompletedItems()}/{this.props.items.length}</span>
      </h2>
    )
  }

  ListItemsOperations = () => {
    const operations = (
      <div className="form-check border-bottom pb-2 mb-2">
        <input className="form-check-input" type="checkbox" onChange={this.toggleCheckAll}/>
      </div>
    )
    return operations;
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

  ListFooter = () => {
    return (
      <div className='mt-4'>
        <button onClick={this.deleteAllChecked}>Delete all checked</button>
        <button onClick={this.deleteAll}>Delete all</button>
      </div>
    )
  }

  render() {
    return (
      <div className="card p-3">
        {this.ListHeader()}
        {this.ListItemsOperations()}
        {this.ListItems()}
        {this.ListFooter()}
      </div>
    )
  }
}