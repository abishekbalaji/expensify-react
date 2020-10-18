const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Damn bro!!! 3 seconds??? Damn!!! Error bro");
  }, 3000);
});

console.log("before");

promise
  .then((data) => {
    console.log(data);
  })
  .catch((e) => console.log("Error", e));

console.log("after");
