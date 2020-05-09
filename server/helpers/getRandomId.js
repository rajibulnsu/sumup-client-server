function getRandomId() {
  const randomNumber = Math.floor(Math.random() * new Date().getTime());

  return randomNumber;
}

export default getRandomId;