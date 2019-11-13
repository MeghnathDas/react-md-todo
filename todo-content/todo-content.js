import React, { Component } from "react";
import { render } from "react-dom";
import "./todo-content.css";
import "typeface-roboto";

import List from "@material-ui/core/List";
import { ToDoContentItem } from "./todo-content-item/todo-content-item";

export class ToDoContent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      itms: this.props.values.map((dta, key) =>
            <ToDoContentItem value={dta} />)
    };
  }

  render() {
    return (
      <List dense="true">{this.state.itms}</List>
    );
  }
}
