function capitalizeFirstLetter(str) {
  let word = str.split(" ");
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].slice(1);
  }
  return word.join(" ");
}
let input = prompt("Enter a String: ");
console.log(`Input: ${input}`);
console.log(`Output: ${capitalizeFirstLetter(input)}`);
