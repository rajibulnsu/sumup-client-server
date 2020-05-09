import React from 'react';
import StatusComponent from '../status/';
import formatDate from '../../utils/formatDate';

import './transaction.css';

const transaction = (props) => {
  const { transactionDate, status, amount, paymentMethod } = props.detail;

  return (
    <div className="transaction__row">
      <div className="transaction__data_status">
        <span className="transaction__date">{formatDate(transactionDate)}</span>
        <StatusComponent status={status}/>
      </div>
      <div className="transaction__amount_type">
        <span className={`transaction__amount ${status === 'Failed' ? 'status__failed' : null}`}>
          {amount} €
        </span>
        <span className="transaction__type">
          {
            paymentMethod === 'Card' 
              ? <i className="far fa-credit-card" /> 
              : <i className="fas fa-money-bill" />
          }
        </span>
      </div>
    </div>
  );
};

export default transaction;