import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import "typeface-roboto";

import Container from "@material-ui/core/Container ";
import { ToDo } from "./todo-control/todo";

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
        <ToDo values={this.state.todoData} />
      </Container>
    );
  }
}

render(<App />, document.getElementById("root"));
