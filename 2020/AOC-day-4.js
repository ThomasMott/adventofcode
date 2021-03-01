//puzzle at: https://adventofcode.com/2020/day/4

//PART 1
//Solution designed to work in browser console, splits all data by newline and creates input
var lines = document.body.innerText.trim().split('\n\n');

fields = `byr
iyr
eyr
hgt
hcl
ecl
pid`.split("\n");

var count = 0;

for (i=0; i < lines.length; i++){
  let idCount = 0;
  
  for (j=0; j < fields.length; j++){
    if (lines[i].includes(fields[j])) {
      idCount++;
      if (idCount === 7) {
        count++;
      }
    }
  }
}

console.log(count);


//PART 2
//Solution designed to work in browser console, splits all data by newline and creates input
var lines = document.body.innerText.trim().split('\n\n');
var count = 0;

fields = `byr
iyr
eyr
hgt
hcl
ecl
pid`.split("\n");

function rule(x, v) {
  if (x == "byr") return v >= 1920 && v <= 2002;
  if (x == "iyr") return v >= 2010 && v <= 2020;
  if (x == "eyr") return v >= 2020 && v <= 2030;
  if (x == "hgt") {
    u = v.match(/^(\d+)(cm|in)$/);
    if (u && u[2] && u[2] == "in") {
      return u[1] >= 59 && u[1] <= 76;
    }
    if (u && u[2] && u[2] == "cm") {
      return u[1] >= 150 && u[1] <= 193;
    }
    return false;
  }
  if (x == "hcl") return /^#[0-9a-f]{6}$/.test(v);
  if (x == "ecl") return /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(v);
  if (x == "pid") return /^\d{9}$/.test(v);
}

for (const line of lines) {
  if (
    fields.every((x) => {
      let re = new RegExp(x + ":(\\S+)");
      let m = line.replace(/\n/g, " ").match(re);
      if (m) return rule(x, m[1]);
    })
  ) {
    ++count;
  }
}

console.log(count);