import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import "typeface-roboto";

import Container from "@material-ui/core/Container ";
import {ToDo} from "./todo-control/todo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Container>
        <ToDo />
      </Container>
    );
  }
}

render(<App />, document.getElementById("root"));
