//puzzle at: https://adventofcode.com/2020/day/6

//PART 1
//Solution designed to work in browser console, splits all data by newline and creates input
var group = document.body.innerText.trim().split('\n\n');
var count = 0;
var duplicate = 0;
var letterArray = [];

for (i=0; i < group.length; i++){
  var lines = group[i].replaceAll("\n", "");

  for (j=0; j<lines.length; j++){
    var line = lines[j].split("");

    for (k=0; k<line.length; k++){
      
      for (l=0; l<letterArray.length; l++){
        
        if (letterArray[l] === line[k]){duplicate = 1;}
      }
      
    if (duplicate === 0) {letterArray.push(line[k])}
    duplicate = 0;
    }
  }
  for (m=0; m<letterArray.length; m++){
    count++;

  }
  letterArray = [];

}
console.log(count);