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

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

//Solution 1 While Loop
function chunkArray(arr, len) {
  //Initialize chunked array
  const chunkedArr = [];
  //Set index
  let i = 0; 

  //Loop while index is less than array length
  while (i < arr.length) {
    //Slice out from the index to the index + the chunked length and push onto the chunked array
    chunkedArr.push(arr.slice(i,i + len));
  //increment by chunked length
  i += len;
  }
  return chunkedArr
}

let output2 = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
console.log(output2)

//Solution 2 For Each High Order Array
function chunkArray2(arr, len) {
 //Initialize chunked array
  const chunkedArr = [];
// Loop through array
arr.forEach(val => {
  //get last element
  const last = chunkedArr[chunkedArr.length - 1]

  // Check if last and if last length is equal to the chunk len
  if (!last || last.length === len) {
    chunkedArr.push([val])
  } else {
    last.push(val);
  }
  });
  return(chunkedArr)
}
 
let output3 = chunkArray2([1, 2, 3, 4, 5, 6, 7], 3);
console.log(output3)

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

//Solution 1
function flattenArray(arrays) {
return arrays.reduce( (a,b) => {
  return a.concat(b)
})
}

let output4 = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
console.log(output4)

//Solution 2
function flattenArray2(arrays) {
return[].concat.apply([],arrays)
}

let output5 = flattenArray2([[1, 2], [3, 4], [5, 6], [7]]);
console.log(output5)

//Solution 3 Spread Operator
function flattenArray3(arrays) {
return[].concat(...arrays)
}

let output6 = flattenArray3([[1, 6], [3, 1], [8, 6], [7]]);
console.log(output6)

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

//Solution 1 with Main and Helper Functions
function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2)
}
  //Helper function

  function formatStr(str) {
    return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('') //Convert to arrays
    .sort()
    .join('')
  }


let output7 = isAnagram('elbow', 'below');
console.log(output7)

let output8 = isAnagram('Dormitory', 'dirty room##');
console.log(output8)

//Solution 2 Function using Every Method
function isAnagramx (str1,str2){
    const arr1 = str1.toLowerCase().split('').sort()
    const arr2 = str2.toLowerCase().split('').sort()
    return arr1.every((value,index) => value === arr2[index])
}

let output9 = isAnagramx('elbow', 'Below');
console.log(output9)

//Solution 3 Variable
let isAnagramx2 = (str1,str2) => str1.toLowerCase().split('').sort().every((value,index) => value ===  str2.toLowerCase().split('').sort()[index])

let output10 = isAnagramx2('Listen', 'siLent');
console.log(output10)

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, function (char) {
    if ( char === 'z' || char === 'Z') {
      return 'a'
    } else {
      return String.fromCharCode(char.charCodeAt() + 1)
    }
  })

  newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel) {
    return vowel.toUpperCase();
  });
  return newStr
}

// Call Function
const output11 = letterChanges('hello there'); 

console.log(output11);