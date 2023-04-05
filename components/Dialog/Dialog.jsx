import React, { useEffect } from 'react';
import './Dialog.css';

const Dialog = ({ isOpen, onClose, title, children, closeOnOverlayClick }) => {
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      onClose();
    }
  };
  const handleOverlayClick = (event) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className='dialog-overlay'
      data-testid='dialog-overlay'
      onClick={handleOverlayClick}>
      <div className='dialog' data-testid='dialog'>
        <button
          className='dialog-close'
          role='button'
          aria-label='close dialog'
          onClick={onClose}>
          <span>&times;</span>
        </button>
        <h1 className='dialog-title' data-testid='dialog-title'>
          {title}
        </h1>
        {React.Children.count(children) > 0 && (
          <div className='dialog-content' data-testid='dialog-content'>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dialog;
