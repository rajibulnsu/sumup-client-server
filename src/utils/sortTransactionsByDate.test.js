import sortTransactionsByDate from './sortTransactionsByDate';

const mockTransactions = [
  {
    "transactionId": 349272226535,
    "transactionDate": "2019-10-11T02:32:46.298Z",
    "status": "Successful",
    "amount": 12.19,
    "paymentMethod": "Card"
  },
  {
    "transactionId": 684642834690,
    "transactionDate": "2020-01-10T10:02:49.817Z",
    "status": "Successful",
    "amount": 162.45,
    "paymentMethod": "Card"
  },
  {
    "transactionId": 413291423039,
    "transactionDate": "2019-10-30T18:10:33.022Z",
    "status": "Successful",
    "amount": 134.8,
    "paymentMethod": "Card"
  }
];

const sortedTransactions = [
  {
    "transactionId": 684642834690,
    "transactionDate": "2020-01-10T10:02:49.817Z",
    "status": "Successful",
    "amount": 162.45,
    "paymentMethod": "Card"
  },
  {
    "transactionId": 413291423039,
    "transactionDate": "2019-10-30T18:10:33.022Z",
    "status": "Successful",
    "amount": 134.8,
    "paymentMethod": "Card"
  },
  {
    "transactionId": 349272226535,
    "transactionDate": "2019-10-11T02:32:46.298Z",
    "status": "Successful",
    "amount": 12.19,
    "paymentMethod": "Card"
  }
];

describe('sortTransactionsByDate', () => {
  it('should sort transactions decending order by transaction daate', () => {
    const result = sortTransactionsByDate(mockTransactions);

    expect(result).toStrictEqual(sortedTransactions);
  });
});