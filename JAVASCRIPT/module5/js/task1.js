const arr = [["Ram","Noodles"],["Shyam","Rolls"],["Keshav", "Momos"]];


let obj = {};

arr.forEach(element => {

let key = element[0];
let value = element[1];

obj[key] = value;
    
});

console.log(obj);

const student = {
    name: "Khushi",
    placement:"10cr",
    education: "Mtech cse",
    University:"I.I.T",
    age:"24",
    hobbies:"Cooking and watching Japnanese cartoon",
    feeling:'Happy',
    favoriteFood:"Sahi paneer",
    favoriteColor:"pink",

}

console.log(student);
delete student.favoriteColor;
delete student.favoriteColor;
console.log(student);

