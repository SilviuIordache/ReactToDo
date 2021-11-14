import React from 'react';

export default class ToDoList extends React.Component {

  render() {
      const items = this.props.items?.map((item, index) => 
        <p key={index}>{index + 1}. {item}</p>
      );
      return (
        <div className="card p-3">
          <h2 className="mb-2">Items</h2>
          {items}
        </div>
      )
    }
  
}