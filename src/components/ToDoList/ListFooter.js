import React from "react";

export default class ListFooter extends React.Component {

  toggleCheckAll = (event) => {
    this.props.toggleCheckAll(event);
  };

   deleteAll = () => {
    this.props.deleteAll();
  };

  deleteAllChecked = () => {
    this.props.deleteAllChecked();
  };

  getCompletedItemsNumber = () => {
    return this.props.items.filter((item) => item.completed === true).length;
  };

  render() {
    return (
      <div className="d-flex justify-content-between align-items-center border-top pt-2 mt-2 ">
        <CheckAllItemsButton
          onChange={this.toggleCheckAll}
          disabled={this.props.items.length === 0}
        />
        <div className="d-flex">
          <DeleteAllChecked
            disabled={this.getCompletedItemsNumber() === 0}
            onClick={this.deleteAllChecked}
          />
          <DeleteAllItemsButton
            onClick={this.deleteAll}
            disabled={this.props.items.length === 0}
          />
        </div>
      </div>
    );
  }
}

function CheckAllItemsButton(props) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        onChange={props.onChange}
        disabled={props.disabled}
      />
    </div>
  );
}

function DeleteAllItemsButton(props) {
  return (
    <button
      className="btn btn-danger btn-sm ms-2 px-3"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <i className="far fa-md fa-trash-alt"></i>
    </button>
  );
}

function DeleteAllChecked(props) {
  return (
    <div className="d-flex justify-content-center">
      <button
        className="btn btn-warning d-flex align-items-center py-2"
        disabled={props.disabled}
        onClick={props.onClick}
      >
        <i className="far fa-md fa-trash-alt"></i>
        <span className="mx-2">all</span>
        <input type="checkbox" checked readOnly></input>
      </button>
    </div>
  );
}
