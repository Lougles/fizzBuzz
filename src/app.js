const fizzbuzz = require('./process');

const numbers = Array.from({length: 100}, () => Math.floor(Math.random() * 1000) + 1);

for (let number of numbers) {
  console.log(`${number}: ${fizzbuzz.processNumber(number)}`);
}