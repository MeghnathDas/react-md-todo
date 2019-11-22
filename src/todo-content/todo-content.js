import React, { Component } from "react";
import "./todo-content.css";
import "typeface-roboto";

import List from "@material-ui/core/List";
import CircularProgress from '@material-ui/core/CircularProgress';
import { ToDoContentItem } from "./todo-content-item/todo-content-item";

import firebase from '../firebase';

export class ToDoContent extends Component {
  constructor(props) {
    super(props);

    this.ref = firebase.firestore().collection('todos');
    this.unsubscribe = null;
    this.state = {
      todoData: [],
      isLoading: true
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
      todoData,
      isLoading: false
    });
  }

  markTodoItemAsDone(todoId) {
    const updateRef = firebase.firestore().collection('todos').doc(todoId);
    updateRef.update({
      status: 1
    }).then((docRef) => {
      console.log("Marked as done");
    }).catch((error) => {
      console.error("Error on mark as done", error);
    });
  }
  deleteTodoItem(todoId) {
    firebase.firestore().collection('todos').doc(todoId).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    if (this.state.isLoading === true) {
      return (<div className="loading-spinner-area"><CircularProgress /></div>);
    } else {
      return (<List className="list-area" dense>
        {this.state.todoData.map(todo =>
          <ToDoContentItem key={todo.id} value={todo}
            onMarkDone={this.markTodoItemAsDone.bind(this, todo.id)}
            onRemove={this.deleteTodoItem.bind(this, todo.id)} />
        )}
      </List>);
    }
  }
}
