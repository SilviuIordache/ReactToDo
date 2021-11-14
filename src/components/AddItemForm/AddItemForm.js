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
      <form onSubmit={this.onSubmit} className="mt-5">
        <label>
          Name:
          <input type="text" 
            onChange={this.onChange}
            value={this.state.inputText}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}