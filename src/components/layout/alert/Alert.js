import React from 'react';

const Alert = (props) => {
  const { alert, closeAlert } = props;

  return (
    alert !== null && (
    <div className={`alert ${alert.type}`}>
    {alert.msg}
    <button className='closeButton' onClick={closeAlert} aria-label='close alert' type='button'>
      <span aria-hidden='true'> &times;</span>
    </button>
   
    </div>
    )
  );
};

export default Alert;
