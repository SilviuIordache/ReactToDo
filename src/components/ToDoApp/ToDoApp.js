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
      // create copy of items
      const tempItems = this.state.items
  
      // remove item
      tempItems.splice(index, 1);
  
      // update local state
      this.setState({
        items: tempItems
      });
  
      // update local storage
      localStorage.setItem('lsItems', JSON.stringify(this.state.items))
    }
  }

  toggleCompletion = (index) => {
    // create copy of items
    const tempItems = this.state.items
    
    // toggle completion
    tempItems[index].completed = !tempItems[index].completed;

    // update local state
    this.setState({
      items: tempItems
    });

    // update local storage
    localStorage.setItem('lsItems', JSON.stringify(this.state.items))
  }

  clearList = () => {
    const clearConfirmation = window.confirm('Are you sure you want to delete all the items in the list?')

    if (clearConfirmation) {
      localStorage.removeItem('lsItems');
      this.setState({
        items: [],
      });
    }
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
              clearList={this.clearList}
              toggleCompletion={this.toggleCompletion}
              deleteItem={this.deleteItem}
            />
          </div>
        </div>
      </div>
    );
  }
}