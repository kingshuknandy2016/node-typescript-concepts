let counter = 0;

const getData = () => {
  console.log("Fetching Data ", counter++);
};

const myDebounce = (myFunction, delay) => {
  // Declare a variable called 'timer' to store the timer ID
  let timer;
  return (...args) => {
    // Clear the previous timer to prevent the execution of 'myFunction'
    if (timer) {
      clearTimeout(timer);
    }
    // Set a new timer that will execute 'mainFunction' after the specified delay
    timer = setTimeout(() => {
      myFunction();
    }, delay);
  };
};

const betterFunction = myDebounce(getData, 1000);
