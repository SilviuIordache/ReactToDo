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
  return items
  }
  render() {
   
    return (
      <div className="card p-3">
        <h2 className="mb-2 d-flex justify-content-between mb-4">
          <span>Items</span>
          <span>1/3</span>
        </h2>
        {this.ListItems()}
        <button className='mt-4' onClick={this.clearList}>Clear list</button>
      </div>
    )
  }
}