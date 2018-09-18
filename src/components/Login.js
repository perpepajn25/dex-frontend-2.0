import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../actions'


class Login extends React.Component {
  state = {
      error: false,
      fields: {
        username: '',
        password: ''
      }
    }

  handleChange = (e) => {
    e.persist()
    this.setState((prevState) => {
      return {
       fields: {
         ...prevState.fields,
         [e.target.name]: e.target.value
        }
       }
      });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.loginUser(this.state.fields)
  };

  render() {
    const { fields } = this.state;
    if (this.props.loggedIn) {
      return <Redirect to='profile' />
    } else {
    return (
      <div>
        {this.state.error ? <h1>Try again...</h1> : null}
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Username</label>
              <input
                name="username"
                placeholder="username"
                value={fields.username}
                onChange={this.handleChange}
              />
            </div>
            <div >
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="password"
                value={fields.password}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }}
}

const mapStateToProps = (state) => {
  const loggedIn = !!state.auth.currentUser.id
  return {
    loggedIn
  }
}

export default connect(mapStateToProps, { loginUser })(Login);
