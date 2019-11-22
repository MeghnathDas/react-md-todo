import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import "./todo-entry.css";
import firebase from "../firebase";

export class ToDoEntry extends Component {
  constructor(props) {
    super(props);
    this.titleInputRef = React.createRef();
    this.dbRef = firebase.firestore().collection('todos');
    this.state = {
      todoTitle: '',
      isLoading: false
    };
  }

  onChange = (e) => {
    if (this.state.isLoading === true) { return; }
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.todoTitle) { return; }
    if (this.state.isLoading === true) { return; }

    this.setState({
      isLoading: true
    });

    this.dbRef.add({
      title: this.state.todoTitle,
      createdOn: new Date(),
      status: 0
    }).then((docRef) => {
      this.setState({
        todoTitle: '',
        isLoading: false
      });
      this.titleInputRef.current.focus();
    }).catch((error) => {
      console.error("Error adding document: ", error);
      this.setState({
        isLoading: false
      });
    });
  }

  render() {
    return (
      <form className="todo-entry-form"
        noValidate autoComplete="off"
        onSubmit={this.onSubmit}>
        <TextField
          id="todoInput"
          name="todoTitle"
          label="Enter To Do text"
          helperText=""
          margin="normal"
          ref={this.titleInputRef}
          value={this.state.todoTitle}
          onChange={this.onChange}
        />
        <Button type="submit"
          variant="contained"
          color="primary"
          size="small"
          disabled={this.state.isLoading}
          startIcon={<SaveIcon />}>
          Add
        </Button>
      </form>
    );
  }
}
