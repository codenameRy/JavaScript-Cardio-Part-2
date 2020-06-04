// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

// function longestWord(sen) {
//   // SOLUTION 1 - Return a single longest word
//   // SOLUTION 2 - Return an array and include multiple words if they have the same length
//   // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
// }

function longestWord(sen) {
  //Create filtered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  //Sort by length. Take current iteration and compare to the length before
  const sort = wordArr.sort( (a,b) => {
    return b.length - a.length
  });
      // return(sort)
  //If there are multiple words, place into array 
  const longestWordArr = sort.filter(word => {
    return word.length === sort[0].length
  })
    // return(longestWordArr)
    // Check if more than one array val
  if (longestWordArr.length === 1) {
    // Return the word
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

let output = longestWord('Hellio there, my name is Brad');
console.log(output)