import React from 'react';

export default class ToDoList extends React.Component {

  render() {
    const items = this.props.items.map((item, index) => 
      <p key={index}>{index}. {item}</p>
    );

    if (this.props.items.length > 0) {
      return (
        <div className="card p-3">{items}</div>
      )
    }
  }
}