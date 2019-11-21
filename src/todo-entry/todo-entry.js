import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import Fab from "@material-ui/core/Fab";
// import IconButton from "@material-ui/core/IconButton";
// import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";
import "./todo-entry.css";

export class ToDoEntry extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <form className="todo-entry-form" noValidate autoComplete="off">
        <TextField
          id="todoInput"
          label="Enter To Do text"
          helperText=""
          margin="normal"
        />
        <Button
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
