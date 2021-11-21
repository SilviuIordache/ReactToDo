import React from 'react';
import AddItemForm from '../AddItemForm/AddItemForm.js';
import ToDoList from '../ToDoList/ToDoList.js';

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      exampleItems: [
        { text: 'go for a run', completed: false},
        { text: 'relax', completed: false},
        { text: 'clean the house', completed: true}, 
        { text: 'take out trash', completed: true}, 
      ],
      inputText: ''
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
      // otherwise initialize list with examples
      this.setState({
        items: this.state.exampleItems
      })
      // store it in ls
      localStorage.setItem('lsItems', JSON.stringify(this.state.exampleItems));
    }
  }

  addItem = () => {
    this.setState({
      items: [
        ...this.state.items, 
        {
          text: this.state.inputText,
          completed: false
        }
      ],
      inputText: ''
    },
    () => {
      localStorage.setItem('lsItems', JSON.stringify([...this.state.items]));
    });
  }

  handleNewItemInput = (newVal) => {
    this.setState({
      inputText: newVal
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

  saveItemEdit = (index, newText) => {
    const tempItems = this.state.items;
    tempItems[index].text = newText;
    this.updateList(tempItems);
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
              handleNewItem={this.handleNewItemInput}
              addItem={this.addItem}
              inputText={this.state.inputText}
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
              saveItemEdit={this.saveItemEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}