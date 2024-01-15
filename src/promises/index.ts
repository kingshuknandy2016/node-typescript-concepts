import { resolve } from "path";

// Create a promise that resolve after 5 sec
const promiseResolveAfter5sec = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 5000);
});

// Number is even number
const evenPromise = (num: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(num);
    } else {
      reject("Number is odd");
    }
  });
};

// Create a delay method
const delay = (timeInMs: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeInMs);
  });
};

const main = async () => {
  promiseResolveAfter5sec.then((value) => {
    console.log("Successfully resolved the promise,", value);
  });

  try {
    const even = await evenPromise(7);
    console.log(even);
  } catch (error) {
    console.error(error);
  }

  delay(3000).then(() => console.log("runs after 3 seconds"));
};

export default main;
