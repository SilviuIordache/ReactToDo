import React from 'react';
import AddItemForm from '../AddItemForm/AddItemForm.js';
import ToDoList from '../ToDoList/ToDoList.js';

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemText: ''
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

  addItem = () => {
    this.setState({
      items: [
        ...this.state.items, 
        {
          text: this.state.itemText,
          completed: false
        }
      ],
      itemText: ''
    },
    () => {
      localStorage.setItem('lsItems', JSON.stringify([...this.state.items]));
    });
  }

  updateNewItem = (newVal) => {
    this.setState({
      itemText: newVal
    })
  }

  deleteItem = (index) => {
    const itemDeleteConfirm = window.confirm('Delete item?')
    if (itemDeleteConfirm) {
      const tempItems = this.state.items
      tempItems.splice(index, 1);
      this.updateList(tempItems);
    }
  }

  editItem = (index) => {
    // make copy of items
    const tempItems = this.state.items

    // copy itemToEdit
    const editItem = tempItems[index];

    // remove it from the temp list
    tempItems.splice(index, 1)

    this.setState({
      itemText: editItem.text,
    })
  }

  toggleCompletion = (index) => {
    const tempItems = this.state.items
    tempItems[index].completed = !tempItems[index].completed;
    this.updateList(tempItems);
  }

  toggleCheckAll = (checkedState) => {
    const tempItems = this.state.items;
    tempItems.forEach((item) => item.completed = checkedState);
    this.updateList(tempItems);
  }

  deleteAll = () => {
    const clearConfirmation = window.confirm('Are you sure you want to delete all the items in the list?')
    if (clearConfirmation) {
      this.updateList([]);
    }
  }

  deleteAllChecked = () => {
    const clearConfirmation = window.confirm('Are you sure you want to delete all COMPLETED items in the list?')
    if (clearConfirmation) {
      const tempItems = this.state.items.filter((item) => item.completed === false);
      this.updateList(tempItems);
    }
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
          <div className="col-12 col-md-6 col-xl-4">
            <AddItemForm 
              onSubmit={this.addItem}
              onChange={this.updateNewItem}
              itemText={this.state.itemText}
            />
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <ToDoList 
              items={this.state.items} 
              toggleCheckAll={this.toggleCheckAll}
              deleteAllChecked={this.deleteAllChecked}
              deleteAll={this.deleteAll}
              toggleCompletion={this.toggleCompletion}
              deleteItem={this.deleteItem}
              editItem={this.editItem}
            />
          </div>
        </div>
      </div>
    );
  }
}