import React, { Component } from 'react';

const INITIAL_STATE = {
  email: '',
  password: '',
};

class SignInForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    console.log(`Email: ${email}, Password: ${password}`);

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="popup-enter">
        <div className="tab">
          <span className="is-active">Sign in</span>
          <span>Sign up</span>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Sign in</button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
