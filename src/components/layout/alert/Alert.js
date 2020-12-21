import React from 'react';

const Alert = (props) => {
  const { alert, closeAlert } = props;

  return (
    alert !== null && (
    <div className={`alert $
    {alert.type}`}>
    {alert.msg}
    <button onClick={closeAlert} close />
    </div>
    )
  );
};

export default Alert;
