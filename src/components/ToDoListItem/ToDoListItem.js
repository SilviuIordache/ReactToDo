import React from 'react';

export default class ToDoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCompletion = this.toggleCompletion.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  toggleCompletion = () => {
    this.props.toggleCompletion(this.props.index);
  }

  deleteItem = () => {
    this.props.deleteItem(this.props.index)
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
        <i class="far fa-xs fa-trash-alt"></i>
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
        {this.ItemDelete()}
      </div> 
    )
  }
}