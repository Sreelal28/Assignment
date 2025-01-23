let num = [];
let pCount = 0;
let nCount = 0;
for (let i = 1; i <= 10; i++) {
  let input = +prompt(`Enter number ${i} : `);
  num.push(input);
}
for (let j = 0; j < num.length; j++) {
  if (num[j] > 0) {
    pCount++;
  } else if (num[j] < 0) {
    nCount++;
  }
}
console.log(`INPUT NUMBERS: ${num}`);
console.log(`POSITIVE NUMBERS: ${pCount},NEGATIVE NUMBERS: ${nCount}`);
