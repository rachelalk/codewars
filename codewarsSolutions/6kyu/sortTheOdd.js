// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
	//make copy of odd numbers in new array
	let oddArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 !== 0) {
			oddArray.push(array[i]);
		}
	}
	//order smallest to largest
	let oddOrdered = oddArray.sort(function (a, b) {
		return a - b;
	});
	//replace in order
	let index = 0;
	let updatedArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0) {
			updatedArray.push(array[i]);
		} else {
			updatedArray.push(oddOrdered[index]);
			index++;
		}
	}
	return updatedArray;
}

sortArray([1, 3, 2, 8, 5, 4]);