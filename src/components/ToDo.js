import React from 'react';
import AddItemForm from './AddItemForm/AddItemForm.js';
import ToDoList from './ToDoList/ToDoList.js';

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.addToDo = this.addToDo.bind(this);
  }

  addToDo(item) {
    this.setState({
      items: [...this.state.items, item],
    },
    () => {
      localStorage.setItem('lsItems', JSON.stringify([...this.state.items]));
    }
    );
  }

  componentDidMount() {
    const storage = localStorage.getItem('lsItems');
    
    // check if localstorage has lsItems key
    if (storage) {
      const lsItems = JSON.parse(storage);
      if (lsItems.length > 0) {
        this.setState({
          items: [...this.state.items, ...lsItems],
        });
      }
    } else {
      // otherwise create it
      localStorage.setItem('lsItems', JSON.stringify(this.state.items));
    }
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