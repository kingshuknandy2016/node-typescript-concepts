const debounce = (myFunction: () => any, delayInMs: number) => {
  let timer: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      myFunction();
    }, delayInMs);
  };
};

// Define a function called 'searchData' that logs a message to the console
function searchData() {
  console.log("searchData executed");
}

// Create a new debounced version of the 'searchData' function with a delay of 3000 milliseconds (3 seconds)
export const debouncedSearchData = debounce(searchData, 3000);

debouncedSearchData();
