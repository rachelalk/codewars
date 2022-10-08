// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".



function rot13(message) {
	const alphabet = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];
	const splitMessage = message.split("");
	const upperMessage = message.toUpperCase().split("");
	const plus13 = [];

	for (let i = 0; i < upperMessage.length; i++) {
		let index = alphabet.indexOf(upperMessage[i]);
		if (index === -1) {
			plus13.push(upperMessage[i]);
		} else {
			index = index + 13;
			if (index > 25) {
				index = index - 26;
			}
			if (splitMessage[i] === upperMessage[i]) {
				plus13.push(alphabet[index]);
			} else {
				console.log("lowercase", alphabet[index], index);
				plus13.push(alphabet[index].toLowerCase());
			}
		}
	}

	return plus13.join("");
}


rot13(test);