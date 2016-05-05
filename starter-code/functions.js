// Question 1
function maxOfTwoNumbers(x,y) {
	if (x > y) {
		return x;
	}
	else if (y > x) {
		return y;
	}
	else {
		console.log("The numbers are equal");
	}
}

// Question 2
//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
function maxOfThree(x, y, z) {
	if (x > y && y > z) {
		return x;
	} else if (z > y && y > x) {
		return z;
	} else if (y > z && y > x) {
		return y;
	} else {
		console.log("Two or more of the numbers are equal");
	}
} 

// Question 3
//Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isCharacterAVowel(x) {
	var vowels = ["a", "e", "i", "o", "u"];
	if (vowels.indexOf(x) !== -1) {
		return true;
	}
	return false;
}

// Question 4
//Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) 
//all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
function sumArray(array) {
	var sum = 0;
	for (var i = 0; i < array.length; sum += array[i++]);
		return sum;
}

// Question 4
function multiplyArray(array) {
	var sum = 1;
	for (var i = 0; i < array.length; i++) {
		sum = sum * array[i];
	}
		return sum;
}

// Question 5
//Write a function that return the number of arguments passed to the function when called.
var numberOfArguments = function() {
  return args.length;
};

// Question 6
//Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
var reverseString = function (r){
  var o = '';
  for (var i = r.length - 1; i >= 0; i--) {
    o += r[i];
  return o;
}
};

// Question 7
//Write a function findLongestWord that takes an array of words and returns the length of the longest one.
function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}



// Question 8
//Write a function filterLongWords that takes an array of words and a number i and returns the array of words 
//that are longer than i characters long.
function filterLongWords () {
  //
}


// Bonus 1
// (hint: `prototype`)


// Bonus 2
function charactersOccurencesCount() {
  
}

