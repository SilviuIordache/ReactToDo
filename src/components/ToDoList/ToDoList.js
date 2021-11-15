import React from 'react';

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.clearList = this.clearList.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  clearList() {
    this.props.clearList();
  }

  toggleCompletion = (event) => {
    console.log('toggle completion');
    console.log(event)

    // this.props.toggleItemCompletion(this.state.inputText);
  }

  render() {
      const items = this.props.items?.map((item, index) =>
        <div key={index} className='d-flex align-items-center'>
          <input 
            onChange={this.toggleCompletion}
            type='checkbox'
            checked={item.completed}
            className='me-2'/>
          <p className='mb-0'>{item.text}</p>
        </div> 
      );
      return (
        <div className="card p-3">
          <h2 className="mb-2">Items</h2>
          {items}
          <button className='mt-3' onClick={this.clearList}> Clear list</button>
        </div>
      )
    }
  
}