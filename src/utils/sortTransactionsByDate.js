const sortTransactionsByDate = transactions => {
  return transactions.sort(
    (a, b) => {
      const comparison = new Date(b.transactionDate) - new Date(a.transactionDate);
      return comparison;
    }
  );
}

export default sortTransactionsByDate;