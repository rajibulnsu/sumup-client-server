import randomId from '../helpers/getRandomId';
import randomDate from '../helpers/getRandomDate';
import randomStatus from '../helpers/getRandomStatus';
import randomAmount from '../helpers/getRandomAmount';
import randomPaymentMethod from '../helpers/getRandomPaymentMethod';

class Transaction {
  constructor(){
    const status = randomStatus();
    const amount = randomAmount();

    this.transactionId = randomId();
    this.transactionDate = randomDate();
    this.status = status;
    this.amount = status === 'Refunded' ? amount * -1 : amount;
    this.paymentMethod = status === 'Refunded' ? 'Card' : randomPaymentMethod();
  }

  getTransaction() {
    return {
      transactionId: this.transactionId,
      transactionDate: this.transactionDate,
      status: this.status,
      amount: this.amount,
      paymentMethod: this.paymentMethod
    }
  }
}

export default Transaction;