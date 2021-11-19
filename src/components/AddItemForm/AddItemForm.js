import React from 'react';

export default class AddItemForm extends React.Component {

  onChange = (event) => {
    this.props.onChange(event.target.value);
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit();
  }

  render () {
    return (
      <form onSubmit={this.onSubmit} className="card bg-white p-4">
        <label className="text-left">
          <h2 className='mb-4'>Add new item</h2>
          <div>
            <input type="text"
              className='form-control'
              onChange={this.onChange}
              value={this.props.inputText}
            />
          </div>
        </label>
        <input 
          className="mt-3 w-50 btn btn-primary"
          type="submit"
          value="Add"
          disabled={this.props.inputText === ''}
        />
      </form>
    )
  }
}