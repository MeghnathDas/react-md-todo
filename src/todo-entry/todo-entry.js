import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import Fab from "@material-ui/core/Fab";
// import IconButton from "@material-ui/core/IconButton";
// import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";
import "./todo-entry.css";
import firebase from "../firebase";

export class ToDoEntry extends Component {
  constructor(props) {
    super(props);    
    this.ref = firebase.firestore().collection('todos');
    this.state = {
      todoTitle: ''
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.todoTitle) { return; }
    this.ref.add({
      title: this.state.todoTitle,
      createdOn: new Date(),
      status: 0
    }).then((docRef) => {
      this.setState({
        todoTitle: ''
      });
    }).catch((error) => {
      console.error("Error adding document: ", error);
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
          value={this.state.todoTitle}
          onChange={this.onChange}
        />
        <Button type="submit"
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
        >
          Add
        </Button>
      </form>
    );
  }
}
