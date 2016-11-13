import React from "react";

export default class UserList extends React.component {
  render() {
    if(Object.getOwnPropertyNames(this.props.users).length === 0){
      return (<div> </div>)
    } else {
      var userNodes = this.props.users.map(function(user){
        return (
          <User name={user.name} email={user.email} key={user.id}>
            {user.name}
          </User>
        )
      })
      return (
        <div>
          <h1>Users</h1>
          {userNodes}
        </div>
      )
    }
  }
}
