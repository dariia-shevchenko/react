import React, { Component } from 'react';

// components
import Logo from './Logo';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import Modal from '../Modal';
import Tabs from '../Tabs';
import SignInForm from '../Tabs/SignInForm';
import SignUpForm from '../Tabs/SignUpForm';
import Button from '../Button';

// styles
import s from './Header.module.css';
import b from '../Button/Button.module.css';

// config
import * as data from '../../config';

//
import { AuthContext } from '../../contexts/AuthContext';
import ModalHoc from '../../hoc/ModalHoc';

class Header extends Component {
  static contextType = AuthContext;

  render() {
    const { isAuthenticated, onSignIn } = this.context;

    return (
      <div className={s.container}>
        <Logo logo={data.logoParam} />
        <Navigation items={data.navItems} />
        {isAuthenticated ? (
          <UserMenu user={data.userData} onSignIn={onSignIn} />
        ) : (
          <ModalHoc>
            {({ isOpen, open, close, ref, index }) => (
              <div className={s.btnWr}>
                <Button
                  className={b.btnLight}
                  type="button"
                  onClick={() => {
                    open(0);
                  }}
                >
                  Sign in
                </Button>
                <Button
                  className={b.btnLight}
                  type="button"
                  onClick={() => {
                    open(1);
                  }}
                >
                  Sign up
                </Button>
                {isOpen && (
                  <Modal
                    onClose={close}
                    ref={ref}
                    text={
                      <Tabs
                        index={index}
                        items={[
                          { title: 'Sign in', content: <SignInForm /> },
                          { title: 'Sign up', content: <SignUpForm /> },
                        ]}
                      />
                    }
                  />
                )}
              </div>
            )}
          </ModalHoc>
        )}
      </div>
    );
  }
}

export default Header;
