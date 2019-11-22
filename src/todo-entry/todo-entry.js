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

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, author } = this.state;

    this.ref.add({
      title,
      description,
      author
    }).then((docRef) => {
      this.setState({
        title: '',
        description: '',
        author: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }
  
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
