import React from 'react';

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.clearList = this.clearList.bind(this);
  }

  clearList() {
    this.props.clearList();
  }
  render() {
      const items = this.props.items?.map((item, index) =>
        <div key={index} className='d-flex align-items-center'>
          <p className='mb-0'>{index + 1}. {item}</p>
          <input type='checkbox' className='ms-2'></input>
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