import Transaction from './transaction';

class TransactionList extends Transaction {
  static mystore = [];

  createTransaction() {
    const transaction = new Transaction();
    TransactionList.mystore.push(transaction.getTransaction());
  }

  getTransactionList () {
    return TransactionList.mystore;
  }
}

export default new TransactionList();