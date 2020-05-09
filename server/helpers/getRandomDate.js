import startDate from './getStartDate';

function randomDate() {
  const start = startDate();
  const end = new Date();

  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date;
}

export default randomDate;