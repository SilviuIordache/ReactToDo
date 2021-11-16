import React from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem.js'

export default class ToDoList extends React.Component {
  clearList = () => {
    this.props.clearList();
  }

  toggleCompletion = (event) => {
    this.props.toggleCompletion(event);
  }

  deleteItem = (event) => {
    this.props.deleteItem(event);
  }
  
  completedItems = () => {
    return this.props.items.filter(item => item.completed === true).length
  }

  ListHeader = () => {
    return (
      <h2 className="mb-2 d-flex justify-content-between mb-4">
        <span>Items</span>
        <span>{this.completedItems()}/{this.props.items.length}</span>
      </h2>
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
    return items;
  }

  ListClear = () => {
    return (
      <button className='mt-4' onClick={this.clearList}>Clear list</button>
    )
  }

  render() {
    return (
      <div className="card p-3">
        {this.ListHeader()}
        {this.ListItems()}
        {this.ListClear()}
      </div>
    )
  }
}