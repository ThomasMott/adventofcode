// puzzle at: https://adventofcode.com/2020/day/3

//PART 1
//Solution designed to work in browser console, splits all data by newline and creates input
const input = document.body.innerText.trim().split('\n');

function slope(right, down, lines) {
  var treeCount= 0;	  
  var index = right;
  

  for (i = down; i < lines.length; i+=down){
    const line = lines[i];

    if (line[index] == "#"){
      treeCount++;
    }
    index = (index + right) % line.length 
  }
  return treeCount;
}

var a = (slope(1, 1, input));
var b = (slope(3, 1, input));
var c = (slope(5, 1, input));
var d = (slope(7, 1, input));
var e = (slope(1, 2, input));

console.log(a * b * c * d * e);


//PART 2
//Solution designed to work in browser console, splits all data by newline and creates input
var input = document.body.innerText.trim().split('\n');

function slope(right, down, input) {
  var treeCount= 0;
  var num = right;
  
  for (i = down; i < input.length; i+=down){
    const inputLine = input[i];
    
    if (inputLine[num] == "#"){
      treeCount++;
    }
    num += right;
    if (num >= inputLine.length){
      num = (num - inputLine.length);
    }
  }
  return treeCount;
}

var a = (slope(1, 1, input));
var b = (slope(3, 1, input));
var c = (slope(5, 1, input));
var d = (slope(7, 1, input));
var e = (slope(1, 2, input));

console.log(a * b * c * d * e);