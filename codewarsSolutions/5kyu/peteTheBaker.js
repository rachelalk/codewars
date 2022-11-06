// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

function cakes(recipe, available) {
	//loop through recipe
	//divide recipe by available
	//if doesn't exist return 0
	//check which ingredient has lowest number - return this - array of sorted numbers

	let amounts = [];
	for (let i = 0; i < Object.keys(recipe).length; i++) {
		let ingredient = Object.entries(recipe)[i][0];
		if (available[ingredient]) {
			amounts.push(Math.floor(available[ingredient] / recipe[ingredient]));
		} else {
			return 0;
		}
	}
	return amounts.sort(function (a, b) {
		return a - b;
	})[0];
}

cakes(
	{ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
	{ sugar: 500, flour: 2000, milk: 2000 }
);
