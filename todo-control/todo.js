import React, { Component } from "react";
import { render } from "react-dom";
import "./todo.css";
import "typeface-roboto";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

export class ToDo extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <Card className="todo-area">
        <CardHeader title="To Do List - Using React" />
        <CardContent>
          <p>Start editing to see some magic happen :)</p>
        </CardContent>
      </Card>
    );
  }
}
