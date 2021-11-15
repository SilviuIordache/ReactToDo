import React from 'react';

export default class ToDoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  toggleCompletion = (event) => {
    console.log('toggle completion');
    console.log(event)

    // this.props.toggleItemCompletion(this.state.inputText);
  }

  render() {
    return (
      <div className='d-flex align-items-center'>
        <input 
          onChange={this.toggleCompletion}
          type='checkbox'
          checked={this.props.item.completed}
          className='me-2'/>
        <p className='mb-0'>{this.props.item.text}</p>
      </div> 
    )
  }
}