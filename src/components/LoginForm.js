import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if(this.state.username && this.state.password){ 
      this.props.handleLogin(this.state)
    }

  }

  render() {
    console.log(this.state.username)
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input onChange={e => this.handleInput(e)} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={e => this.handleInput(e)} id="password" name="password" type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
