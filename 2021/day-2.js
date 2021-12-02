const input = document.body.innerText.trim().split('\n').map(String);
let f = 0;
let d = 0;

//p1
input.map((el)=>{
	if(el.includes("forward"))
		f += parseInt((el.split(" ")[1]));
	else if(el.includes("down"))
		d += parseInt((el.split(" ")[1]));
	else
		d -= parseInt((el.split(" ")[1]));
});
console.log(`p1 = ${f * d}`);

f = 0;
a = 0;
d = 0;

//p2
input.map((el)=>{
	if(el.includes("forward")) {
		f += parseInt((el.split(" ")[1]));
		if(a > 0)
			d += (parseInt((el.split(" ")[1])) * a);
	} 
	else if(el.includes("down"))
		a += parseInt((el.split(" ")[1]));
	else
		a -= parseInt((el.split(" ")[1]));
});
console.log(`p2 = ${f * d}`);