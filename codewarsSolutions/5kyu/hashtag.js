// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
	// empty string return false ✅
	if (str.trim().length === 0) {
		return false;
	}

	const hashtag = ["#"];
	const strArr = str.split(" ");

	//take in string loop through capitalise first letter ✅
	for (let i = 0; i < strArr.length; i++) {
		hashtag.push(strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1));
	}

	//join array - # first entry ✅
	const result = hashtag.join("");

	//check length✅
	if (result.length < 141) {
		return result;
	}
	//return false if over 140 characters✅
	else {
		return false;
	}
}

generateHashtag("Do We have A Hashtag");