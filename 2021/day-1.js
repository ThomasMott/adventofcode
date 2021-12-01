const input = document.body.innerText.trim().split('\n').map(Number);
let p1 = input.filter((el, i, arr)=>el<arr[i+1]).length;
let p2 = input.map((el, i, arr)=>el+arr[i+1]+arr[i+2]).filter((el,i,arr)=>!isNaN(el) && el<arr[i+1]).length

console.log(p1);
console.log(p2);

