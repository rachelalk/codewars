//Take in an array of numbers disregarding any negative numbers
//If only nagative numbers return -1
//Otherwise return the lowest unique number not already included in the array

function solution(A) {
	let removeNegatives = A.filter(function (x) {
		return x > -1;
	});


	if (removeNegatives[0] === undefined) {
		return 1;
	}

	let noDupes = removeNegatives.filter(
		(item, index) => removeNegatives.indexOf(item) === index
	);

	let noNegatives = noDupes.sort(function (a, b) {
		return a - b;
	});

	let count = noNegatives[0];
	let missing = [];

	for (let i = 0; i < noNegatives.length; i++) {
		console.log("noNegatives[i]", noNegatives[i]);
		console.log("count", count);
		if (noNegatives[i] !== count) {
			missing.push(count);
		}
		count = count + 1;
	}


	if (missing[0] === undefined) {
		let index = noNegatives.length - 1;
		return noNegatives[index] + 1;
	}


	return missing[0];
}

solution([-1, -3]);
