import React from 'react'

class CreateUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.nameOnChange = this.nameOnChange.bind(this)
    this.passwordOnChange = this.passwordOnChange.bind(this)
  }

  onSubmit(e){
    e.preventDefault()
    alert(this.state.name +' '+ this.state.password)
  }

  nameOnChange(event){
    this.setState({name: event.target.value})
  }

  passwordOnChange(event){
    this.setState({password: event.target.value})
  }

  render() {
    return (
      <div className="outer-input-form">
        <form className="input-form center-content" onSubmit={this.onSubmit}>
          <label to="user-name-input" className="label">User Name: </label>
          <input
            id="user-name-input"
            value={this.state.name}
            onChange={this.nameOnChange}
            type="text"
            className="nightlife-input"
          />
          <label to="user-password-input" className="label">Password</label>
          <input
            id="user-password-input"
            value={this.state.password}
            onChange={this.passwordOnChange}
            className="nightlife-input"
            type="password"
          />
          <button id="submit" className="nightlife-button" onSubmit={this.onSubmit} >Create New User</button>
        </form>
      </div>
    )
  }
}

export default CreateUser
