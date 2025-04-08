function generateRandomBetween(min, max, exclude) {
  let result;

  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    result = generateRandomBetween(min, max, exclude);
  }
  else {
    result = randomNumber
  }

  return result;
}

export {
  generateRandomBetween,
};
