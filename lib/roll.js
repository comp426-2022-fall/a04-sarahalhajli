import minimist from 'minimist';

export function roll(sides, dice, rolled) {
	var rolls = [];
	for(let i = 0; i<rolled; i++) {
		var randomRoll = 0;
		for(let i = 0; i<dice; i++){
			randomRoll += Math.floor(Math.random() * sides) + 1;
		}
		rolls.push(randomRoll);
	}
	
	return rolls;
}