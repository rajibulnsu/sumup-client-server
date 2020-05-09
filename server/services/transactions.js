import TransactionList from '../repositories/transactionList';
import { NUMBER_OF_TRANSACTIONS } from '../common/constant';

export const addTransaction = () => {
  TransactionList.createTransaction();
}

export const getTransactions = () => {
  return TransactionList.getTransactionList();
}

export const generateTransactions = () => {
  let i = 0;
  while (i < NUMBER_OF_TRANSACTIONS) {
    addTransaction();
    i++;
  }
}

export const getLatestTransactions = () => {
  return TransactionList.getTransactionList().splice(-1 * NUMBER_OF_TRANSACTIONS);
}
