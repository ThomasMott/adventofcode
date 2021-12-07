//p1
const crabs = document.body.innerText.split(',').map(Number);
const median = crabs.sort((a,b) => a-b)[crabs.length/2];

console.log(crabs.map(el => Math.abs(el - median)).reduce((a, b) => a + b));

//p2
const crabs = document.body.innerText.split(',').map(Number);
const mean = Math.floor(crabs.reduce((a, b) => a + b, 0) / crabs.length);
const calcFuel = (n) => (n * (n + 1)) / 2;

console.log(crabs.reduce((acc, v) => acc + calcFuel(Math.abs(mean - v)), 0));