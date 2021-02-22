// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  
  var length = +userInput[0];
  
  var result = 1/4 * Math.sqrt(3) * length * length

  console.log(result.toFixed(2));

  //end-here
});
