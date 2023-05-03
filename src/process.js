const { FizzBuzzStrategy, FizzStrategy, BuzzStrategy, NumberStrategy } = require('./strategies.js');
const config = require('./config');
const FIZZ_NUMBER = config.fizzNumber;
const BUZZ_NUMBER = config.buzzNumber;
function processNumber(number) {
  const fizzBuzzStrategy = new FizzBuzzStrategy(FIZZ_NUMBER, BUZZ_NUMBER);
  const fizzStrategy = new FizzStrategy(FIZZ_NUMBER);
  const buzzStrategy = new BuzzStrategy(BUZZ_NUMBER);
  const numberStrategy = new NumberStrategy();
  
  const strategies = [
    fizzBuzzStrategy,
    fizzStrategy,
    buzzStrategy,
    numberStrategy,
  ];
  
  for (let strategy of strategies) {
    if (strategy.matches(number)) {
      return strategy.getMessage();
    }
  }
  
  throw new Error('No matching strategy found');
}

module.exports = {
  processNumber
}
