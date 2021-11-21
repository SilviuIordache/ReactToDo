import React from 'react';

export default class ToDoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      editText: ''
    }
  }

  toggleCompletion = () => {
    this.props.toggleCompletion(this.props.index);
  }

  deleteItem = () => {
    this.props.deleteItem(this.props.index)
  }

  editItem = () => {
    // this.props.editItem(this.props.index)
    this.setState({
      editMode: true,
      editText: this.props.item.text
    })

  }

  handleEditChanges = (e) => {
    this.setState({
      editText: e.target.value
    })
  }

  saveEditChanges = () => {
    console.log('send changes')
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
      <div>
        {this.state.editMode 
          ? <input onChange={this.handleEditChanges} value={this.state.editText}/> 
          : <p className={className}>{this.props.item.text}</p>
        }
      </div>
    )
  }

  DeleteButton = () => {
    return (
      <button className="btn btn-secondary btn-sm ms-2" onClick={this.deleteItem}>
        <i className="far fa-trash-alt"></i>
      </button>
    )
  }

  EditButton = () => {
    return (
      <button className="btn btn-secondary btn-sm ms-2" onClick={this.editItem}>
        <i className="fas fa-edit"></i>
      </button>
    )
  }

  SaveEditChangesButton = () => {
    return (
      <button className="btn btn-primary btn-sm ms-2" onClick={this.editItem}>
        <i className="fas fa-save"></i>
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
          {this.SaveEditChangesButton()}
          {this.EditButton()}
          {this.DeleteButton()}
        </div>
        
      </div> 
    )
  }
}