const input = document.body.innerText.trim().split('\n');

let arr = [0,0,0,0,0,0,0,0,0,0,0,0];
let [g, e] = ["", ""];
 
input.map((el, i) => {
	el.split('').map((el, i) => {
		arr[i] += parseInt(el);
	})
});

arr.map((el) => el > input.length/2 ? (g += "1", e += "0") : (g += "0", e += "1"));
console.log(parseInt(g, 2) * parseInt(e, 2));


//p2

const input = document.body.innerText.trim().split('\n');

let bit = 0;
let oxy = input; //[110011001111, 001111110000, ...]

const countBits = (input) => input.map(num => num.split(''))
	.reduce((acc, number) => {
	number.forEach((digit, i) => {
		if(!acc[i]) acc[i] = {'1': 0,'0': 0}
		acc[i][digit]++
  	})
  	return acc;
},[])

while(oxy.length > 1) {
	let digit = countBits(oxy)[bit];
	oxy = oxy.filter(
      		num => num[bit] == (digit['1'] >= digit['0'] ? '1' : '0')
    	)
    	bit++;
}

bit = 0;
let co = input;

while(co.length > 1) {
	let digit = countBits(co)[bit];
	co = co.filter(
		num => num[bit] == (digit['1'] >= digit['0'] ? '0' : '1')
    	)
    	bit++;
}

console.log(parseInt(oxy,2) * parseInt(co,2));