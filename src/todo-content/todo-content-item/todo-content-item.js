import React, { Component } from "react";
// import { render } from "react-dom";
import "./todo-content-item.css";

import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
// import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import DoneIcon from "@material-ui/icons/Done";

import moment from "moment";

export class ToDoContentItem extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    let avtr;
    let doneBtn;

    if (this.props.value.status === 0) {
      avtr = <AssignmentIcon />;
      doneBtn = (
        <Tooltip title="Mark as done" placement="bottom-start">
          <IconButton edge="end" aria-label="mark-done" onClick={this.props.onMarkDone}>
            <DoneIcon />
          </IconButton>
        </Tooltip>
      );
    } else if (this.props.value.status === 1) {
      avtr = <AssignmentTurnedInIcon />;
    }

    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar>{avtr}</Avatar>
        </ListItemAvatar>
        <ListItemText
          className="todo-title"
          primary={this.props.value.title}
          secondary={
            "Created on: " +
            moment(this.props.value.createdOn).format("DD-MM-YYYY HH:mm")
          }
        />
        <ListItemSecondaryAction>
          {doneBtn}
          <Tooltip title="Delete">
            <IconButton edge="end" aria-label="delete" onClick={this.props.onRemove}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}
