import React, { Component } from 'react';
import Input from '../Input';
import Button from '../Button';

// styles
import s from './Tabs.module.css';
import b from '../Button/Button.module.css';
import i from '../Input/Input.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

class SignInForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target: { name, value } }) => {
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
      <div className={s.signIn}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <Input
            className={i.input}
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <Input
            className={i.input}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <Button className={b.btn} type="submit">
            Sign in
          </Button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
