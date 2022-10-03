// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
	const not0 = [];
	const arr0 = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			arr0.push(arr[i]);
		} else {
			not0.push(arr[i]);
		}
	}

	return [...not0, ...arr0];
}

moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);