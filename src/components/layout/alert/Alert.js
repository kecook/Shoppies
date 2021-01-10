import React from 'react';

const Alert = ({ alert, closeAlert }) => {
  return (
    alert !== null && (
      <div className='alert text-center'>
        {alert.msg}
        <button
          className='closeButton'
          onClick={closeAlert}
          aria-label='close alert'
          type='button'
        >
          <span aria-hidden='true'> &times;</span>
        </button>
      </div>
    )
  );
};

export default Alert;
