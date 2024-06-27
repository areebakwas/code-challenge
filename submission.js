const findSum = function(array) {

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
  console.log(sum)

}
const array = [2, 4, 6];





const findFrequency = function(array) {
  
const recurrent = {};

array.forEach(element => {
  
});


};




const isPalindrome = function(str) {
 
  var pali = str.split("").reverse().join("");

  if (pali === str) {
    return true;
  } else {
    return false;
  }

};






const largestPair = function(array) {

  const newPairProducts = [];
 
 for (var i = 0;i < array.length - 1; i++) {
    var cNum = array[i];
    var nNum = array[i + 1];
    var products = cNum * nNum;
    
    newPairProducts.push(products);

 }
    return Math.max(...newPairProducts);

};


 




const removeParenth = function(str) {
  const indexBegin = str.indexOf('(');
  const indexFin = str.indexOf(')');

  const beginParenth = str.slice(0, indexBegin);
  const finParenth = str.slice(indexFin + 1);

  return beginParenth + finParenth;

  

};



const scoreScrabble = function(str) {
  
const tally = {
  'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'l': 1, 'n': 1, 'r': 1, 's': 1, 't': 1,
  'd': 2, 'g': 2,
  'b': 3, 'c': 3, 'm': 3, 'p': 3,
  'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4,
  'k': 5,
  'j': 8, 'x': 8,
  'q': 10, 'z': 10 
}
let outcome = 0;

str = str.toLowerCase();
 for (let i = 0; i < str.length; i++) {
  const scrabbleLetters = str[i];
  if (tally.hasOwnProperty(scrabbleLetters)) {
    outcome += tally[scrabbleLetters]
  }
 }
 return outcome;


};
