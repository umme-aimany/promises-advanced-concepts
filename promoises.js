// Simulating an asynchronous operation that resolves after a certain time
function simulateAsyncOperation(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Operation completed after ${time} ms`);
      }, time);
    });
  }
  
  // Using let to declare a variable with block scope
  let count = 0;
  
  // Closure example: A function that increments the count and logs it
  function incrementAndLog() {
    count++;
    console.log(`Count: ${count}`);
  }
  
  // Simulating a series of asynchronous operations using Promises
  simulateAsyncOperation(1000)
    .then(result => {
      console.log(result);
      incrementAndLog();
      return simulateAsyncOperation(1500);
    })
    .then(result => {
      console.log(result);
      incrementAndLog();
      return simulateAsyncOperation(2000);
    })
    .then(result => {
      console.log(result);
      incrementAndLog();
    })
    .catch(error => {
      console.error(`An error occurred: ${error}`);
    });
  
  // Demonstrating closure: Using a function to create a customized logger
  function createLogger(prefix) {
    return function(message) {
      console.log(`[${prefix}] ${message}`);
    };
  }
  
  const infoLogger = createLogger('INFO');
  const errorLogger = createLogger('ERROR');
  
  infoLogger('This is an informational message.');
  errorLogger('An error occurred.');
  