import React, { Component } from "react";
import { render } from "react-dom";
import "./todo-item.css";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

import moment from "moment";

export class ToDoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let avtr;

    if (this.props.value.status == 0) {
      avtr = <AssignmentIcon />
    } else if (this.props.value.status == 1) {
      avtr = <AssignmentTurnedInIcon />
    }

    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            {avtr}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={this.props.value.title}
          secondary={moment(this.props.value.createdOn).format(
            "DD-MM-YYYY HH:mm"
          )}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}
