import React from 'react';
import Button from '../../layout/button/button';

const Alert = ({ alert, closeAlert }) => {
  return (
    alert !== null && (
      <div className='alert text-center'>
        {alert.msg}
        <Button
          text={'x'}
          onClick={() => closeAlert()}
          buttonStyle={'btn--x--corner'}
          buttonSize={'btn--close'}
          // className='closeButton'
          // onClick={closeAlert}
          // aria-label='close alert'
          // type='button'
        >
          <span aria-hidden='true'> &times;</span>
        </Button>
      </div>
    )
  );
};

export default Alert;
