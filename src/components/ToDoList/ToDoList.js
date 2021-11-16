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

  render() {
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
      <div className="card p-3">
        <h2 className="mb-2">Items</h2>
        {items}
        <button className='mt-3' onClick={this.clearList}>Clear list</button>
      </div>
    )
  }
}