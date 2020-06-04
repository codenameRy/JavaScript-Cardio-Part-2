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