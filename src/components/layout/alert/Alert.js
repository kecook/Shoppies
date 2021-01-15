import React from 'react';
import Button from '../../layout/button/button';

const Alert = ({ alert, closeAlert }) => {
  return (
    alert && (
      <div className='alert text-center'>
        {alert.msg}
        <Button
          text={'x'}
          onClick={closeAlert}
          buttonStyle={'btn--x--corner'}
          buttonSize={'btn--close'}
        />
      </div>
    )
  );
};

export default Alert;
