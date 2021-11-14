import React from 'react';
import AddItemForm from './AddItemForm/AddItemForm.js';
import ToDoList from './ToDoList/ToDoList.js';

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: ['abc', '123', '#$%' ,'gogu']
    }
    this.addToDo = this.addToDo.bind(this);
  }

  addToDo(item) {
    this.setState({
      items: [...this.state.items, item],
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-6">
            <AddItemForm onSubmit={this.addToDo}/>
          </div>
          <div className="col-6">
            <ToDoList items={this.state.items}/>
          </div>
        </div>
      </div>
    );
  }
}