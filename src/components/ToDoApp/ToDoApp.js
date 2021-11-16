import React from 'react';
import AddItemForm from '../AddItemForm/AddItemForm.js';
import ToDoList from '../ToDoList/ToDoList.js';

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
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

  addItem = (text) => {
    this.setState({
      items: [
        ...this.state.items, 
        {
          text,
          completed: false
        }
      ],
    },
    () => {
      localStorage.setItem('lsItems', JSON.stringify([...this.state.items]));
    });
  }

  deleteItem = (index) => {
    const itemDeleteConfirm = window.confirm('Delete item?')

    if (itemDeleteConfirm) {
      const tempItems = this.state.items
      tempItems.splice(index, 1);
      this.updateList(tempItems);
    }
  }

  toggleCompletion = (index) => {
    const tempItems = this.state.items
    tempItems[index].completed = !tempItems[index].completed;
    this.updateList(tempItems);
  }

  checkAll = () => {
    const tempItems = this.state.items;
    tempItems.forEach((item) => item.completed = true);
    this.updateList(tempItems);
  }

  uncheckAll = () => {
    const tempItems = this.state.items;
    tempItems.forEach((item) => item.completed = false);
    this.updateList(tempItems);
  }

  deleteAll = () => {
    const clearConfirmation = window.confirm('Are you sure you want to delete all the items in the list?')
    if (clearConfirmation) {
      this.updateList([]);
    }
  }

  deleteAllChecked = () => {
    const tempItems = this.state.items.filter((item) => item.completed === false);
    this.updateList(tempItems);
  }

  updateList = (items) => {
    this.setState({ items },
      () => { localStorage.setItem('lsItems', JSON.stringify(this.state.items)) }
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-6">
            <AddItemForm onSubmit={this.addItem}/>
          </div>
          <div className="col-6">
            <ToDoList 
              items={this.state.items} 
              checkAll={this.checkAll}
              uncheckAll={this.uncheckAll}
              deleteAllChecked={this.deleteAllChecked}
              deleteAll={this.deleteAll}
              toggleCompletion={this.toggleCompletion}
              deleteItem={this.deleteItem}
            />
          </div>
        </div>
      </div>
    );
  }
}