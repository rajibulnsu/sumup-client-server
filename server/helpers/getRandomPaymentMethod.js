function getRandomPaymentMethod() {
  return Math.random() < 0.4 ? 'Cash' : 'Card';
}

export default getRandomPaymentMethod;