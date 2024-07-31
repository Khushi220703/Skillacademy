
let x = 10;
document.getElementById("global").innerHTML = x;

{
    x = 20;
    document.getElementById("local").innerHTML = x;
}

console.log("List of fruits\nApple\nMango\nOrange");

console.log(`List of fruits
Apple
Mango
Orange`);

let menuList = `Menu items
Snadwhich
Frech fries
Potato widge
Donuts
Pizza`

console.log(menuList);

let p = 10;
let r = 10;
let t = 2;

let SI = (p*r*t)/100;
document.getElementById("si").innerHTML = "Simple interest is " + SI;