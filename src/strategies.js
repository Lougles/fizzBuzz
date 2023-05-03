class FizzBuzzStrategy {
  constructor(fizzNumber, buzzNumber) {
    this.fizzNumber = fizzNumber;
    this.buzzNumber = buzzNumber;
  }
  
  matches(number) {
    return number % this.fizzNumber === 0 && number % this.buzzNumber === 0;
  }
  
  getMessage() {
    return 'FizzBuzz';
  }
}

class FizzStrategy {
  constructor(fizzNumber) {
    this.fizzNumber = fizzNumber;
  }
  
  matches(number) {
    return number % this.fizzNumber === 0;
  }
  
  getMessage() {
    return 'Fizz';
  }
}

class BuzzStrategy {
  constructor(buzzNumber) {
    this.buzzNumber = buzzNumber;
  }
  
  matches(number) {
    return number % this.buzzNumber === 0;
  }
  
  getMessage() {
    return 'Buzz';
  }
}

class NumberStrategy {
  constructor() {}
  
  matches(number) {
    return true;
  }
  
  getMessage(number) {
    if (typeof number !== 'undefined') {
      return number.toString();
    } else {
      return '';
    }
  }
}

module.exports = {
  FizzBuzzStrategy,
  FizzStrategy,
  BuzzStrategy,
  NumberStrategy,
};
