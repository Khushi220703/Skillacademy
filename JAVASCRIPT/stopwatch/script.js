let milliSec = document.getElementById("milliSec");
let sec = document.getElementById("sec");
milliSec.innerHTML = "00";
sec.innerHTML = "00";
var milli = 0;
var interval;
var seconds =0;
const timer = () =>{
   milli++;

 if ( milliSec.innerHTML <= 9) {
    milliSec.innerHTML = "0" +milli;

 }
  
 if(milliSec.innerHTML > 9){
    milliSec.innerHTML = milli;
 }
  
 if(milliSec.innerHTML > 99 ){
    milliSec.innerHTML = "00";
    seconds++;
    sec.innerHTML = "0" + seconds;
 }

 if(sec.innerHTML > 9){
    sec.innerHTML = seconds;
 }
}

const start = () =>{
    clearInterval(interval);
    interval = setInterval(timer,10);
    
    
}

const stop = () =>{
    clearInterval(interval);
}

const reset = () =>{
    milliSec.innerHTML = "00";
    sec.innerHTML = "00";
}