import React from 'react';
import './Dialog.css';

const Dialog = ({ isOpen, onClose, title, children, content }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='dialog-overlay'>
      <div className='dialog'>
        <button
          className='dialog-close'
          role='button'
          aria-label='close dialog'
          onClick={onClose}>
          <span>&times;</span>
        </button>
        <div className='dialog-content'>
          <h1>{title}</h1>
          {children}
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
