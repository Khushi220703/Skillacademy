const arr = ["London", "Delhi", "Chine"];

for (const iterator of arr) {
 // alert(iterator);   
}


const person = new Array();

const person1 = ["Khushi", 20, "Dwarka mor"];
const person2 = ["Khushbu",20, "Dwarka mor"];

person[0] = person1;
person[1] = person2;
console.log(person);
document.write(person);


const arr1 = ["Delhi","Mumbai", "Patna"];

function check(ar){
    return ar.length > 5;
}

const longer = arr1.filter(check);
console.log(longer);
document.write(longer);
arr1.pop();

