import React from 'react';

export default class AddItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
  }

  onChange = (event) => {
    this.setState({
      inputText: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.inputText);

    this.setState({
      inputText: ''
    });
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
              value={this.state.inputText}
            />
          </div>
        </label>
        <input className="mt-3 w-50 btn btn-primary" type="submit" value="Add"/>
      </form>
    )
  }
}