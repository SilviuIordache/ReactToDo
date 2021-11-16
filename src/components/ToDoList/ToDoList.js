import React from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem.js'

export default class ToDoList extends React.Component {
  

  toggleCompletion = (event) => {
    this.props.toggleCompletion(event);
  }

  deleteItem = (event) => {
    this.props.deleteItem(event);
  }

  checkAll = () => {
    this.props.checkAll();
  }

  uncheckAll = () => {
    this.props.uncheckAll();
  }

  clearList = () => {
    this.props.clearList();
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

  ListFooter = () => {
    return (
      <div className='mt-4'>
        <button onClick={this.checkAll}>Check all</button>
        <button onClick={this.uncheckAll}>Uncheck all</button>
        <button onClick={this.clearList}>Delete all</button>
      </div>
    )
  }

  render() {
    return (
      <div className="card p-3">
        {this.ListHeader()}
        {this.ListItems()}
        {this.ListFooter()}
      </div>
    )
  }
}