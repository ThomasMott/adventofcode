//puzzle at: https://adventofcode.com/2020/day/2


//PART 1
//Solution designed to work in browser console, splits all data by newline and creates input array
const passwordInput = document.body.innerText.trim().split('\n');

//declare variable for correct passwords
var passCorrect = 0;

//function to check passwords are valid
function checkPass(input){
  
  for (j = 0; j < input.length; j++){
  var count = 0;

    let check = input[j].replace(":","").split(" ");
    check[2] = check[2].split("");
    check[0] = check[0].split("-")

    //count how many times the letter is in the string
    for (i = 0; i < check[2].length; i++) {
      if (check[1] === check[2][i]){
      count++;
    }}
    //if between values then is returned correct
    if (check[0][0] <= count && count <= check[0][1]){
      passCorrect++;
    }
  }
    return passCorrect;
}

console.log(`There are ${checkPass(passwordInput)} correct passwords`);


//PART 2
//Solution designed to work in browser console, splits all data by newline and creates input array
const passwordInput = document.body.innerText.trim().split('\n');

//declare variable for correct passwords
var passCorrect = 0;

//function to check passwords are valid
function checkPass(input){
  
  for (j = 0; j < input.length; j++){
    
    var count = 0;

    let check = input[j].replace(":","").split(" ");
    check[2] = check[2].split("");
    check[0] = check[0].split("-")
  
    for (i = 0; i < check[2].length; i++) {
      if (check[1] === check[2][i]){
        if (check[0][0] == i+1 || check[0][1] == i+1){
          count++;
        }
    }}
    if (count === 1){
      passCorrect++;
    }
  }
    return passCorrect;
}

console.log(`There are ${checkPass(passwordInput)} correct passwords`);