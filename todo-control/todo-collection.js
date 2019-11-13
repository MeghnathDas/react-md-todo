import React, { Component } from "react";
import { render } from "react-dom";
import "./todo-collection.css";
import "typeface-roboto";

import List from "@material-ui/core/List";
import { ToDoItem } from "./todo-item/todo-item";

export class ToDoCollection extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      itms: this.props.values.map((dta, key) =>
            <ToDoItem value={dta} />)
    };
  }

  render() {
    return (
      <List dense="true">{this.state.itms}</List>
    );
  }
}
