// You parked your car in a parking lot and want to compute the total cost of the ticket. The billing rules are as follows:

// The entrance fee of the car parking lot is 2;
// The first full or partial hour costs 3;
// Each successive full or partial hour (after the first) costs 4.
// You entered the car parking lot at time E and left at time L. In this task, times are represented as strings in the format "HH:MM" (where "HH" is a two-digit number between 0 and 23, which stands for hours, and "MM" is a two-digit number between 0 and 59, which stands for minutes).

// Write a function:

// function solution(E, L);

// that, given strings E and L specifying points in time in the format "HH:MM", returns the total cost of the parking bill from your entry at time E to your exit at time L. You can assume that E describes a time before L on the same day.

// For example, given "10:00" and "13:21" your function should return 17, because the entrance fee equals 2, the first hour costs 3 and there are two more full hours and part of a further hour, so the total cost is 2 + 3 + (3 * 4) = 17. Given "09:42" and "11:42" your function should return 9, because the entrance fee equals 2, the first hour costs 3 and the second hour costs 4, so the total cost is 2 + 3 + 4 = 9.

// Assume that:

// strings E and L follow the format "HH:MM" strictly;
// string E describes a time before L on the same day.
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

function solution(E, L) {
	//separate entry and leave into variables of hours and minutes
	let entry = E.split(":");
	let leave = L.split(":");
	//minus hours and minutes to find time in car park
	let hours = leave[0] - entry[0];
	let minutes = leave[1] - entry[1];
	//count variable starts at 2
	let count = 2;
	//minus 1 hour and add 3 to count
	if (hours === 0) {
		return count + 3;
	}

	if (hours >= 1) {
		count = count + 3;
		hours--;
	}

	//if hours >1 add 4 to count and return
	if (hours === 0) {
		return count + 4;
	}

	//check additional hours adding 4 each time
	if (hours >= 1) {
		count = count + hours * 4;
	}

	//check any minutes - add 4
	if (minutes > 0) {
		return count + 4;
	}

	//return
	return count;
}