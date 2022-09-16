// DESCRIPTION:
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


var uniqueInOrder = function (iterable) {
	// check if string or array
	//turn into array
	let array = iterable;
	if (typeof iterable === "string") {
		array = iterable.split("");
	}

	//for loop check item next to and remove splice()
	for (let i = 0; i < array.length; i++) {
		if (array[i] === array[i + 1]) {
			array.splice(i, 1, " ");
		}
	}

	const result = array.filter((word) => word !== " ");

	return result;
};
