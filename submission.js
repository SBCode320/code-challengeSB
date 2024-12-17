const findSum = function(array) {
  //"Reduce" the array to single value (sum of elements)
  const sum = array.reduce((acc, current) => {  
    return acc + current; 
    },0) //Initialize the accumulator to zero; each element is added 
  return sum; 
};

const findFrequency = function(array) {
  //Initialize empty object for storing frequency of each string element
  let frequencyCount = {}; 

  //Loop through the array to count the frequency of each element
  array.forEach(str => { 
      //If this is the first occurrence, set the value to 1
      if (!frequencyCount[str]){ 
          frequencyCount[str] = 1; 
      }
      //If the element has been counted already, add 1 
      else { 
          frequencyCount[str] ++; 
      }
  } )

  //Initialize variables to keep track of the least + most frequent strings and min + max count values
  let least = ''; 
  let most = ''; 
  let minCount = Infinity; // Start high to replace with each lower value
  let maxCount = 0; //Start low to replace with each higher value

  //Loop through frequencyCount object to find the least and most counted elements
  for (const str in frequencyCount) {
      const count = frequencyCount[str]; 

      //Replace minCount with lesser values as you loop
      if (count < minCount) { 
          minCount = count; 
          least = str; 
      }

      //Replace maxCount with higher values as you loop
      if (count > maxCount) { 
          maxCount = count; 
          most = str; 
      }

  }

  //Return most and least counted strings
  return {most: most, least: least};  
};

const isPalindrome = function(str) {
  //Convert the string to lower case --> convert to array --> reverse --> combine elements (creates new string)
  const reverseStr = str.toLowerCase().split('').reverse().join(''); 

  //Compare original string (lower case) to the reverse; return Boolean for whether the two strings match
  return str.toLowerCase() === reverseStr; 
};

const largestPair = function(array) {
   //Initialize variable to keep track of largest product; start low
  let largestProduct = -Infinity; 

  //Loop until the penultimate element 
  for (let i = 0; i < array.length - 1; i++) {
    const product = array[i] * array[i + 1]; 

    //Replace largestProduct with greater product values as you loop through
    if (product > largestProduct) {
      largestProduct = product
    }
    
  }

  return largestProduct; 
};

const removeParenth = function(str) {
  //Find the index of the opening and closing parentheses
  const openParIndex = str.indexOf('('); 
  const closeParIndex = str.indexOf(')'); 

  //Slice from the beginning to the opening parenthesis(not inclusive)
  const prePar = str.slice(0,openParIndex); 

  //Slice from closing parenthesis (not inclusive) to end
  const postPar = str.slice(closeParIndex + 1)

  //Return combination of sliced strings
  return prePar + postPar; 

};

const scoreScrabble = function(str) {
  //Create an object that holds scores 
  const scoreChart = {
      a:1, e:1, i:1, o:1, u:1, l:1, n:1, r:1, s:1, t:1, 
      d:2, g:2, 
      b:3, c:3, m:3, p:3, 
      f:4, h:4, v:4, w:4, y:4, 
      k:5, 
      j:8, x:8, 
      q:10, z:10
  }

  //No case sensitivity
  str = str.toLowerCase(); 

  //Initialize score
  let score = 0; 
  
  //Convert str to array
  //Loop through each element (letter) of the array
  //Add the letter's value to the score variable
  str.split('').forEach(letter => {
      score += scoreChart[letter]; 
  })

  //Return final score
  return score; 
};
