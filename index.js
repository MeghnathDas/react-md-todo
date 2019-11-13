import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import "typeface-roboto";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";

import Container from "@material-ui/core/Container ";
import { ToDoCollection } from "./todo-control/todo-collection";
import { ToDoEntry } from "./todo-entry/todo-entry";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [
        { id: 1001, title: "Todo Item 1", createdOn: new Date(), status: 0 },
        { id: 1002, title: "Todo Item 2", createdOn: new Date(), status: 1 },
        { id: 1003, title: "Todo Item 3", createdOn: new Date(), status: 1 },
        { id: 1004, title: "Todo Item 4", createdOn: new Date(), status: 0 }
      ]
    };
  }

  render() {
    return (
      <Container maxWidth="sm">
       <Card className="todo-area">
        <CardHeader title="To Do List - Using React" subheader="&nbsp;by MD" />
        <CardContent>
          <ToDoEntry />
          <ToDoCollection values={this.state.todoData} />
        </CardContent>
      </Card>
      </Container>
    );
  }
}

render(<App />, document.getElementById("root"));
