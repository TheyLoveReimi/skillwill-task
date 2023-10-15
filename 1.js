function Rep(inputString, valueToReplace, valueToReplaceWith) {
  var result = '';
  var i = 0;
  while (i < inputString.length) {
    if (inputString.substr(i, valueToReplace.length) === valueToReplace) {
      result += valueToReplaceWith; 
      i += valueToReplace.length;   
    } else {
      result += inputString[i];    
      i++;
    }
  }
  return result;
}
var originalString = "lorem ipsum dolar molar";
var replacementString= Rep(originalString, "dolar", "lar");

console.log(replacementString);

function upperWord(sentence) {
  var words = sentence.split(' ');
  var capitalizedWords = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  var capitalizedSentence = capitalizedWords.join(' ');

  return capitalizedSentence;
}
var originalSentence = "lorem ipsum dolar molar";
var capitalizedSentence = upperWord(originalSentence);

console.log(capitalizedSentence);

function sortByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}
var users = [
  { name: 'Lasha', age: 30 },
  { name: 'nika', age: 12 },
  { name: 'misha', age: 34 },
  { name: 'Saba', age: 20 }
];

var sortedUsers = sortByAge(users);
console.log(sortedUsers);
