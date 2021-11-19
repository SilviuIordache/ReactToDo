import React from 'react';

export default class ToDoListItem extends React.Component {

  toggleCompletion = () => {
    this.props.toggleCompletion(this.props.index);
  }

  deleteItem = () => {
    this.props.deleteItem(this.props.index)
  }

  editItem = () => {
    this.props.editItem(this.props.index)
  }

  ItemCompletion = () => {
    return (
      <input 
      onChange={this.toggleCompletion}
      type='checkbox'
      checked={this.props.item.completed}
      className='form-check-input me-2'/>
    )
  }

  ItemDescription = () => {
    let className = 'mb-0'
    if (this.props.item.completed) {
      className += ' text-decoration-line-through';
    }
    return (
      <p className={className}>{this.props.item.text}</p>
    )
  }

  ItemDelete = () => {
    return (
      <button className="btn btn-secondary btn-sm ms-2" onClick={this.deleteItem}>
        <i className="far fa-xs fa-trash-alt"></i>
      </button>
    )
  }

  ItemEdit = () => {
    return (
      <button className="btn btn-secondary btn-sm ms-2" onClick={this.editItem}>
        <i className="fas fa-xs fa-edit"></i>
      </button>
    )
  }

  render() {
    return (
      <div className='d-flex justify-content-between mb-3'>
        <div className='d-flex align-items-center'>
          {this.ItemCompletion()}
          {this.ItemDescription()}
        </div>

        <div className='d-flex align-items-center'>
          {this.ItemEdit()}
          {this.ItemDelete()}
        </div>
        
      </div> 
    )
  }
}