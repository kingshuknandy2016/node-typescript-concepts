const submitData = () => {
  console.log("Submit the data");
};

const myThrottle = (myFunction, delay) => {
  return () => {
    // As soon as we click on submit this button gets disabled
    document.getElementById("myId").disabled = true;
    setTimeout(() => {
      myFunction();
      //After the timeout over and after the function call it is enabled
      document.getElementById("myId").disabled = false;
    }, delay);
  };
};

const betterFunctionThrottle = myThrottle(submitData, 5000);
