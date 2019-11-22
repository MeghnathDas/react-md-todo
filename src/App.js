import React, { Component } from "react";
import "typeface-roboto";
import './App.css';

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import { Container } from "@material-ui/core";
import { ToDoContent } from "./todo-content/todo-content";
import { ToDoEntry } from "./todo-entry/todo-entry";


export class App extends Component {
  render() {
    return (
      <Container maxWidth="sm">
       <Card className="todo-area">
        <CardHeader title="To Do List - Using React" subheader="&nbsp;by MD" />
        <CardContent>
          <ToDoEntry />
          <ToDoContent />
        </CardContent>
      </Card>
      </Container>
    );
  }
}
