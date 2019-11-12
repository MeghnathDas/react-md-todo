import React, { Component } from "react";
import { render } from "react-dom";
import "./todo.css";
import "typeface-roboto";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import List from "@material-ui/core/List";

import { ToDoItem } from "./todo-item/todo-item";

export class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      itms: this.props.values.map((dta, key) =>
            <ToDoItem value={dta} />)
    };
  }

  render() {
    return (
      <Card className="todo-area">
        <CardHeader title="To Do List - Using React" subheader="&nbsp;by MD" />
        <CardContent>
          <List dense="true">{this.state.itms}</List>
        </CardContent>
      </Card>
    );
  }
}
