var fishes = document.body.innerText.split(',').map(el => parseInt(el));

for (let i = 0; i < 80; i++) {
	for (let j = 0; j < fishes.length; j++) {
        	if (fishes[j] == 0) {
            		fishes.push(9);
            		fishes[j] = 7;
        	}
        	fishes[j]--;
    	}
};
console.log(fishes.length);

//part 2
var fishes = document.body.innerText.split(',').map(el => parseInt(el));
const fishCount = Array(10).fill(0);

fishes.forEach(fish => {
    fishCount[fish]++;
});

for (let day = 0; day < 256; day++) {
    const fishesThatWereAt0 = fishCount[0];
    for (let i = 0; i <= 8; i++) {
        fishCount[i] = fishCount[i + 1];

    }
    fishCount[8] = fishesThatWereAt0;
    fishCount[6] += fishesThatWereAt0;
}

console.log(fishCount.reduce((tot, curr) => tot + curr));