function isPalindrome(word) {
  word = word.toLowerCase();
  let reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}
console.log(isPalindrome('abba'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('a'));
console.log(isPalindrome('robot'));
console.log(isPalindrome('ab'));

/* 
  Add your pseudocode here
  palidrome(word)
  string.toLowercase()
  let reversedWord
  return word
*/

/*
  Add written explanation of your solution here
  create a function palidrome with a parameter word,
  convert word to lowercase,
  write a function to reverse the word,
  use return word to check if the function works.


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
