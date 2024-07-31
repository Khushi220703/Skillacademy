
const person = {
    firstName: "Khushi",
    lastName:"Jha",
    fullName: function(){
        return this.firstName +this.lastName;
    }
}

const member = {
    firstName: "Khushbu",
    lastName:"Jha",
}

let fullName = person.fullName.bind(member);
console.log(fullName());
document.getElementById("demo1").innerHTML = fullName();

const name1 = {
    firstName : "Khushi",
    lastName: 'Jha',
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}

document.getElementById("demo2").innerHTML = name1.fullName();

console.log(name1.fullName());


let x = this;
document.getElementById("demo3").innerHTML = x;

function name2()
{
    return this;
}

document.getElementById("demo4").innerHTML = name2();