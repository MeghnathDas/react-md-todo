import React, { Component } from "react";
// import { render } from "react-dom";
import "./todo-content.css";
import "typeface-roboto";

import List from "@material-ui/core/List";
import { ToDoContentItem } from "./todo-content-item/todo-content-item";

import firebase from '../firebase';

export class ToDoContent extends Component {
  constructor(props) {
    super(props);
    
    this.ref = firebase.firestore().collection('todos');
    this.unsubscribe = null;
    this.state = {
      todoData: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const todoData = [];
    querySnapshot.forEach((doc) => {
      const { title, createdOn, status } = doc.data();
      todoData.push({
        id: doc.id,
        title,
        createdOn: createdOn.toDate(),
        status,
      });
    });
    this.setState({
      todoData
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <List dense="true">{this.state.todoData.map(todo =>
        <ToDoContentItem value={todo} />
      )}
      </List>
    );
  }
}
