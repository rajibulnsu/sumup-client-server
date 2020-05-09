import { NUMBER_OF_PAST_MONTHS } from '../common/constant';

function getStartDate() {
  const currentDate = new Date();
  const startDate = currentDate.setMonth(currentDate.getMonth() - NUMBER_OF_PAST_MONTHS);
  return new Date(startDate);
}

export default getStartDate;
