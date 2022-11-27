import minimist from 'minimist';

export function roll(sides, dice, rolled) {
	var rolls = [];
	for(let i = 0; i<rolled; i++) {
		for(let i = 0; i<dice; i++){
			var randomRoll = Math.floor(Math.random() * sides) + 1;
			randomRoll += randomRoll;
		}
		rolls.push(randomRoll);
	}
	
	return rolls;
}