import React, { forwardRef } from 'react';
import Button from '../Button';
import s from './Modal.module.css';

const Modal = forwardRef((props, ref) => (
  <div className={s.backdrop} ref={ref}>
    <div className={s.modal}>
      {props.text}
      <Button className={s.btn} type="button" onClick={props.onClose}>
        X
      </Button>
    </div>
  </div>
));

export default Modal;
