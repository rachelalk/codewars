// You would like to set a password for a bank account. However, there are three restrictions on the format of the password:

// it has to contain only alphanumerical characters (a−z, A−Z, 0−9);
// there should be an even number of letters;
// there should be an odd number of digits.
// You are given a string S consisting of N characters. String S can be divided into words by splitting it at, and removing, the spaces. The goal is to choose the longest word that is a valid password. You can assume that if there are K spaces in string S then there are exactly K + 1 words.

// For example, given "test 5 a0A pass007 ?xy1", there are five words and three of them are valid passwords: "5", "a0A" and "pass007". Thus the longest password is "pass007" and its length is 7. Note that neither "test" nor "?xy1" is a valid password, because "?" is not an alphanumerical character and "test" contains an even number of digits (zero).

// Write a function:

// function solution(S);

// that, given a non-empty string S consisting of N characters, returns the length of the longest word from the string that is a valid password. If there is no such word, your function should return −1.

// For example, given S = "test 5 a0A pass007 ?xy1", your function should return 7, as explained above.

// Assume that:

// N is an integer within the range [1..200];
// string S consists only of printable ASCII characters and spaces.
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

function solution(S) {
	//split words into array
	console.log(S);
	let string = S.split(" ");
	console.log(string);
	let filtered = [];
	let format = /^[a-z0-9]+$/i;
	let letters = /^[a-z]+$/i;
	let numbers = /^[0-9]+$/;

	function isEven(value) {
		if (value % 2 == 0) return true;
		else return false;
	}

	//for loop - check only letters numbers
	for (let i = 0; i < string.length; i++) {
		let splitString = string[i].split("");
		let letterArray = [];
		let numberArray = [];
		let letterCount = 0;
		let numberCount = 0;
		console.log(splitString);

		for (let j = 0; j < splitString.length; j++) {
			if (splitString[j].match(letters)) {
				letterArray.push(splitString[j]);
				letterCount++;
			}
			if (splitString[j].match(numbers)) {
				numberArray.push(splitString[j]);
				numberCount++;
			}
		}
		console.log("numbers:", numberArray, "count:", numberCount);
		console.log("letters:", letterArray, "count:", letterCount);
		if (splitString)
			if (
				format.test(string[i]) &&
				isEven(letterCount) &&
				!isEven(numberCount)
			) {
				filtered.push(string[i]);
			}
	}
	console.log(filtered);
	//check even number of letters
	//check odd number of digits
	//if criteria met push into new array
	//order by length

	let ordered = filtered.sort(function (a, b) {
		// ASC  -> a.length - b.length
		// DESC -> b.length - a.length
		return b.length - a.length;
	});

	console.log(ordered);
	console.log(ordered[0]);
	//return longest password

	return ordered[0].length;
}

solution("test 5 a0A pass007 ?xy1");