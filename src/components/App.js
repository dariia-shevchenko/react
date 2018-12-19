import React from 'react';

// components
import Button from './Button';
import Comment from './Comment';
import Header from './Header';
import Menu from './Menu';
import Modal from './Modal';
import OrderHistoryPage from './OrderHistoryPage';

// config
import * as data from '../config';

// style
import '../css/normalize.css';
import '../css/App.css';
import s from './Modal/Modal.module.css';
import b from './Button/Button.module.css';

//
import { AuthContext } from '../contexts/AuthContext';
import ModalHoc from '../hoc/ModalHoc';

const App = () => (
  <div className="app">
    <AuthContext.Provider
      value={{
        isAuthenticated: false,
        user: {
          name: 'Test name',
        },
        onSignIn: () => null,
        onSignOut: () => null,
      }}
    >
      <Header />
    </AuthContext.Provider>

    <ModalHoc>
      {({ isOpen, open, close, ref }) => (
        <div className={s.container}>
          <Button className={b.btn} type="button" onClick={open}>
            Open Popup
          </Button>
          {isOpen && (
            <Modal
              onClose={close}
              ref={ref}
              text={<div className={s.modalText}>{data.modalText}</div>}
            />
          )}
        </div>
      )}
    </ModalHoc>

    <Comment />
    <OrderHistoryPage />
    <Menu />
  </div>
);

export default App;
