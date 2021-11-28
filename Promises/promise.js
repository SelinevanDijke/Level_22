/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10. Log the result to the console.
*/
const testNum = (n) => { 
    return new Promise((resolve, reject) => {
        if (n > 10)  {
            resolve('Het nummer ' + n + ' is groter dan 10.');
        } else {
            reject('Het nummer ' + n + ' is kleiner dan 10.');
        }
    });
};
testNum(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));

testNum(23)
.then(result => console.log(result))
.catch(error => console.log(error));

const makeAllCaps = words => {
  return new Promise((resolve, reject) => {
    if (
      words.every(word => {
        return typeof word === 'string';
      })
    ) {
      resolve(
        sortWords(
          words.map(word => {
            return word.toUpperCase();
          })
        )
      );
    } else {
      reject('Not a string!');
    }
  });
};

const sortWords = words => {
  return new Promise((resolve, reject) => {
    if (words) {
      resolve(words.sort());
    } else {
      reject('strings only!');
    }
  });
};

const theseAreWords = ['promise', 'practice', 'break'];

makeAllCaps(theseAreWords)
  .then(sortWords(theseAreWords))
  .then(result => console.log(result))
  .catch(error => console.log(error));

const theseAreNotWords = [1, 'hello', 9];

makeAllCaps(theseAreNotWords)
  .then(sortWords(theseAreNotWords))
  .then(result => console.log(result))
  .catch(error => console.log(error));
  
