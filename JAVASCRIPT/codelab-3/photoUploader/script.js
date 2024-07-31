const images = JSON.parse(localStorage.getItem("images"))  || [];

function upload(){
    document.getElementById("gallery").style.display = "block";
  var image =   document.getElementById("upload");
  var i = image.files[0].name;
  images.push(i);
console.log(i);
  localStorage.setItem("images", JSON.stringify(images));
  
  const res = JSON.parse(localStorage.getItem("images"))
  res.map((obj)=>{
    console.log(obj);
    const img = document.createElement("img");
    img.src = "./images/" + obj;
  
     document.getElementById("gallery").appendChild(img)
     
  })
  

}

const clearImage= () =>{
    images.length = 0;
    localStorage.setItem("images", JSON.stringify(images));
    document.getElementById("gallery").style.display = "none";
}