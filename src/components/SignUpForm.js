import React, { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  password: '',
};

class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, email, phone, password } = this.state;
    console.log(
      `Name: ${name}, Email: ${email}, Phone: ${phone}, Password: ${password}`,
    );

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, email, phone, password } = this.state;
    return (
      <div className="popup-enter">
        <div className="tab">
          <span>Sign in</span>
          <span className="is-active">Sign up</span>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
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
              type="tel"
              placeholder="Phone"
              name="phone"
              value={phone}
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
          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
