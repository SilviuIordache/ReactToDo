import React from "react";

export default class ToDoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      editText: "",
    };
  }

  toggleCompletion = () => {
    this.props.toggleCompletion(this.props.index);
  };

  deleteItem = () => {
    this.props.deleteItem(this.props.index);
  };

  editItem = () => {
    this.setState({
      editMode: true,
      editText: this.props.item.text,
    });
  };

  handleEditChanges = (e) => {
    this.setState({
      editText: e.target.value,
    });
  };

  saveEditChanges = () => {
    this.props.saveItemEdit(this.props.index, this.state.editText);
    this.setState({
      editMode: false,
    });
  };

  render() {
    return (
      <div className="d-flex justify-content-between mb-3">
        <div className="d-flex align-items-center">
          <ItemCompletion
            onChange={this.toggleCompletion}
            checked={this.props.item.completed}
          />
          <ItemDescription
            completed={this.props.item.completed}
            editMode={this.state.editMode}
            onChange={this.handleEditChanges}
            editText={this.state.editText}
            itemText={this.props.item.text}
          />
        </div>

        <div className="d-flex align-items-center">
          {this.state.editMode ? (
            <SaveEditButton onClick={this.saveEditChanges} />
          ) : (
            <EditButton onClick={this.editItem} />
          )}
          <DeleteButton onClick={this.deleteItem} />
        </div>
      </div>
    );
  }
}

function ItemCompletion(props) {
  return (
    <input
      onChange={props.onChange}
      checked={props.checked}
      type="checkbox"
      className="form-check-input me-2"
    />
  );
}

function ItemDescription(props) {
  let className = "mb-0";
  if (props.completed) {
    className += " text-decoration-line-through";
  }
  return (
    <div>
      {props.editMode ? (
        <input onChange={props.onChange} value={props.editText} />
      ) : (
        <p className={className}>{props.itemText}</p>
      )}
    </div>
  );
}

function EditButton(props) {
  return (
    <button className="btn btn-secondary btn-sm ms-2" onClick={props.onClick}>
      <i className="fas fa-edit"></i>
    </button>
  );
}

function DeleteButton(props) {
  return (
    <button className="btn btn-secondary btn-sm ms-2" onClick={props.onClick}>
      <i className="far fa-trash-alt"></i>
    </button>
  );
}

function SaveEditButton(props) {
  return (
    <button className="btn btn-primary btn-sm ms-2" onClick={props.onClick}>
      <i className="fas fa-save"></i>
    </button>
  );
}
