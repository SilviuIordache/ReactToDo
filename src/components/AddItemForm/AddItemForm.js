import React from 'react';

export default class AddItemForm extends React.Component {

  handleNewItem = (event) => {
    this.props.handleNewItem(event.target.value);
  }

  addItem = (event) => {
    event.preventDefault();
    this.props.addItem();
  }

  render () {
    return (
      <form onSubmit={this.addItem} className="card bg-white p-4">
        <h2 className='mb-4'>Add new item</h2>
        <ItemInput
          value={this.props.inputText}
          onChange={this.handleNewItem}
        />
        <AddItemButton disabled={this.props.inputText === ''}/>
      </form>
    )
  }
}

function ItemInput (props) {
  return (
    <div>
      <input type="text"
        className='form-control'
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  )
}

function AddItemButton (props) {
  return (
    <input 
      className="mt-3 w-50 btn btn-primary"
      type="submit"
      value="Add"
      disabled={props.disabled}
    />
  )
}