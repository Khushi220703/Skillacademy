let age = 20;
if(age < 18)
{
    document.getElementById("vote").innerHTML = "Not elegible for voting";
}
else
{
    document.getElementById("vote").innerHTML = "Eligible for voting";
}

var date = new Date().getHours();

if(date < 16)
{
    document.getElementById("date").innerHTML = "Good day";
}
else
{
    document.getElementById("date").innerHTML = "Good Evening";
}

let random = Math.random();

if(random < 0.5)
{
    document.getElementById("link").innerHTML = "<a href='linkedin.com'>Linkedin</a>";
}
else
{
    document.getElementById("link").innerHTML = "<a href='Naukri.com'>Naukri</a>";

}

let day = new Date().getDay();

switch(1){
    case 1:
        document.getElementById("day").innerHTML = "Today is Monday";
        break;
    case 2:
        document.getElementById("day").innerHTML = "Today is Tuesday";
        break;
    case 3:
        document.getElementById("day").innerHTML = "Today is Wednesday";
        break;
    case 4:
        document.getElementById("day").innerHTML = "Today is Thursday";
        break;
    case 5:
        document.getElementById("day").innerHTML = "Today is Friday";
        break;
    case 6:
        document.getElementById("day").innerHTML = "Today is Saturday";
        break;
    case 6:
        document.getElementById("day").innerHTML = "Today is Sunday";
        break;
}