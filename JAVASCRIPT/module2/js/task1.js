let x = 10;
let y = 20;

let sum = x+y;

document.getElementById("sum").innerHTML = sum;


let a = 10;
document.getElementById("sum1").innerHTML = a;

a += 5;
document.getElementById("sum2").innerHTML = a;

let days = 365;
let week_days = 7;

let rem = Math.trunc(days/week_days);
let rem_days = days%rem;
document.getElementById("month").innerHTML = rem  + " weeks and " +  rem_days + " day";

let str1 = "khushi";
let str2 = " Jha";

document.getElementById("name").innerHTML = str1 + str2 ;