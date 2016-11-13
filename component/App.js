import React from "react";
import {conncet} from "react-redux";

import UserList from "./UserList";

import {fetchUsers} from "../actions/userAction";

@connect((store) => {
  return {
    users: store.users.users
  }
})

export default class App extends React.component {
  //Run before render
  componentWillMount() {
    this.props.dispatch(fetchUsers());
  },
  render() {
    return (
      <div>
        Something
      </div>
    )
  }
}
