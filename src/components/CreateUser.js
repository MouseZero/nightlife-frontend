import React from 'react'

class CreateUser extends React.Component {
  render() {
    return (
      <div className="input-form">
        <div>
        <label to="user-name-input" className="label">User Name: </label>
        </div>
        <div>
        <input id="user-name-input" type="text" className="nightlife-input" type="text"></input>
        </div>
        <div>
        <label to="user-password-input" className="label">Password</label>
        </div>
        <div>
        <input id="user-password-input" className="nightlife-input" type="password"></input>
        </div>
      </div>
    )
  }
}

export default CreateUser
