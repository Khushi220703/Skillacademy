//1-d array.
const addresses = ["London", "Delhi", "California"];

for(let address of addresses){
    alert(address);
}

//2-d array.
const profiles = [
    ["Khushi","21","Delhi"],
    ["Khushbu", "21", "Madhubani"],
    ["Rishabh", "19", "Delhi"],
]

 document.write(profiles[0][0]);
 document.write(profiles[0][1]);
 document.write(profiles[0][2]);

function find(i){
    return i.length > 5;
}
const a = addresses.filter(find);
document.write(a);

addresses.pop();

alert(addresses.indexOf("Delhi"));