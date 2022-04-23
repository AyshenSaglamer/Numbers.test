function sayHello (string) {
  return "Hello,"+string+"!"
};
console.log(sayHello("world"));


function uppercase (string) {
  return string.toUpperCase();
}

function lowercase (string) {
  // your code here
  return string.toLowerCase()
};


function countCharacters (string) {
  // your code here
  return string.length;
};




function firstCharacter (string) {
  // your code here
  return string.charAt(0);
};


function firstCharacters (string, n) {
  // your code here
  return string.substring(0,4);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
