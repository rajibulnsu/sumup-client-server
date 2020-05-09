function getRandomStatus() {
  const refundedOrFailed = Math.random() < 0.4 ? 'Refunded' : 'Failed';

  return Math.random() < 0.4 ? refundedOrFailed : 'Successful';
}

export default getRandomStatus;