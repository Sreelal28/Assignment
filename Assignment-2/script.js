let arr = [];
let n = +prompt("Enter the Number of Elements:");
for (let i = 1; i <= n; i++) {
  let input = +prompt(`Enter integer ${i} :`);
  arr.push(input);
}
let sum = 0;
let prod = 1;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  prod *= arr[i];
}
console.log("Input Elements:");
console.log(arr);
console.log(`Sum: ${sum}`);
console.log(`Product: ${prod}`);
