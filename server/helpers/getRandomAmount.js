import { MAX_TRANSACTION_AMOUNT } from '../common/constant';

function getRandomAmount () {
  const randomNumber = Math.random();

  return +(randomNumber * MAX_TRANSACTION_AMOUNT).toFixed(2);
}

export default getRandomAmount;