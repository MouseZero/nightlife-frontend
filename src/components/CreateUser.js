import React from 'react'

class CreateUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
    this.clickedButton = this.clickedButton.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  clickedButton(e){
    alert()
    e.preventDefault()
  }

  onChange(event){
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div className="outer-input-form">
        <form className="input-form center-content" onSubmit={this.clickedButton}>
          <label to="user-name-input" className="label">User Name: </label>
          <input
            id="user-name-input"
            value={this.state.value}
            onChange={this.onChange}
            type="text"
            className="nightlife-input"
            type="text">
          </input>
          <label to="user-password-input" className="label">Password</label>
          <input id="user-password-input" className="nightlife-input" type="password"></input>
          <button id="submit" className="nightlife-button" onSubmit={this.clickedButton} >Create New User</button>
        </form>
      </div>
    )
  }
}

export default CreateUser
