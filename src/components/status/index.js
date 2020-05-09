import React from 'react';
import './status.css';

const status = (props) => {
  const { status } = props;

  return (
    <span className={`status ${status.toLowerCase()}`}>
      {status}
    </span>
  );
};

export default status;