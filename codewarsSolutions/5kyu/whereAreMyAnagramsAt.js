// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []


function anagrams(word, words) {
	//sort letters into order for both word and words
	const sortedWord = word.split("").sort();
	const anagrams = [];

	//loop through check that all letters match, push those that do into new array

	for (let i = 0; i < words.length; i++) {
		const splitWord = words[i].split("").sort();
		const wordCheck = [];
		for (let j = 0; j < sortedWord.length; j++) {
			if (
				sortedWord.length === splitWord.length &&
				sortedWord[j] === splitWord[j]
			) {
				wordCheck.push(splitWord[j]);
			}
		}
		if (wordCheck.length === sortedWord.length) {
			anagrams.push(words[i]);
		}
	}

	return anagrams;
}

anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]);