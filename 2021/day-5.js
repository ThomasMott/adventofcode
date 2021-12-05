function init() {

	let [inputA, oceanA] = getInput();
	console.log(`P1 answer = ${draw(inputA, oceanA)}`);
}

function getInput() {
	
	let ocean = [...new Array(1000)].map(() => new Array(1000).fill(0));
	let input = document.body.innerText.trim().split('\n')
		.map(el => el.split(' -> '))
		.map(array => array.map(el => el.split(',').map(el => parseInt(el))));
	return [input, ocean];
}

function draw(lines, floor) { 

	lines.forEach(([[x1, y1], [x2, y2]]) => {
  		if (y1 === y2) {
    			const [start, end] = [x1, x2].sort((a, b) => a - b);
    			for (let i = start; i <= end; i++) {
      				floor[y1][i]++;
    			}
  		} else if (x1 === x2) {
    			const [start, end] = [y1, y2].sort((a, b) => a - b);	
			for (let i = start; i <= end; i++) {
      				floor[i][x1]++;
    			}
  		}
	});
	return getPoints(floor);
};

function getPoints(floor) {
	
	return floor.reduce((acc, row) => acc + row.filter(el => el > 1).length, 0);
}

init();



//part 2
function init() {

	let [inputA, oceanA] = getInput();
	console.log(`P2 answer = ${draw(inputA, oceanA)}`);
}

function getInput() {
	
	let ocean = [...new Array(1000)].map(() => new Array(1000).fill(0));
	let input = document.body.innerText.trim().split('\n')
		.map(el => el.split(' -> '))
		.map(array => array.map(el => el.split(',').map(el => parseInt(el))));
	return [input, ocean];
}

function draw(lines, floor) { 

	lines.forEach(([[x1, y1], [x2, y2]]) => {
  		if (y1 === y2) {
    			const [start, end] = [x1, x2].sort((a, b) => a - b);
    			for (let i = start; i <= end; i++) {
      				floor[y1][i]++;
    			}
  		} else if (x1 === x2) {
    			const [start, end] = [y1, y2].sort((a, b) => a - b);	
			for (let i = start; i <= end; i++) {
      				floor[i][x1]++;
    			}
  		} else {
    			for (let i = 0; i <= Math.abs(x1 - x2); i++) {
      				const x = x1 > x2 ? x1 - i : x1 + i;
      				const y = y1 > y2 ? y1 - i : y1 + i;
      				floor[y][x]++;
			}
    		}
	});
	return getPoints(floor);
};

function getPoints(floor) {
	
	return floor.reduce((acc, row) => acc + row.filter(el => el > 1).length, 0);
}

init();