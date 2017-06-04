import React from 'react'

class CreateUser extends React.Component {
  render() {
    return (
      <div className="outer-input-form">
        <span className="input-form center-content">
          <label to="user-name-input" className="label">User Name: </label>
          <input id="user-name-input" type="text" className="nightlife-input" type="text"></input>
          <label to="user-password-input" className="label">Password</label>
          <input id="user-password-input" className="nightlife-input" type="password"></input>
          <button id="submit" className="nightlife-button">Create New User</button>
        </span>
      </div>
    )
  }
}

export default CreateUser
