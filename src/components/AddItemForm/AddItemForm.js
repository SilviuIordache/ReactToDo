import React from 'react';

export default class AddItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
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
      <form onSubmit={this.onSubmit} className="card p-3">
        <label className="text-left">
          <h1>Add new item</h1>
          <div>
            <input type="text" 
              onChange={this.onChange}
              value={this.state.inputText}
            />
          </div>
        </label>
        <input className="mt-3 w-50" type="submit" value="Submit"/>
      </form>
    )
  }
}