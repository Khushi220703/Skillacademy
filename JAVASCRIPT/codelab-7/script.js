const products  = [
   { id:1, name:"Product1", price:"10",quantity:0,cost:0},
   { id:2, name:"Product2", price:"20",quantity:0,cost:0},
   { id:3,name:"Product3", price:"30",quantity:0,cost:0},
];

products.map((i) =>{

    let div = document.createElement("div");
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");

    let span1_data = document.createTextNode(i.name);
    let span2_data = document.createTextNode("- $"+i.price);
     
    span1.appendChild(span1_data);
    span2.appendChild(span2_data);

    div.append(span1,span2);

    document.getElementById("box-1").appendChild(div);
    
    let button = document.createElement("button");
    let text = document.createTextNode("Add to cart");
    button.appendChild(text);
    document.getElementById("box-1").appendChild(button);
    
    button.addEventListener("click", () => {
        i.quantity++;
        i.cost = i.price * i.quantity;
        
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td1_data = document.createTextNode(i.id);
        td1.appendChild(td1_data);

        let td2 = document.createElement("td");
        let td2_data = document.createTextNode(i.name);
        td2.appendChild(td2_data);

        let td3 = document.createElement("td");
        let td3_data = document.createTextNode(i.price);
        td3.appendChild(td3_data);
        

        let td4 = document.createElement("td");
        let td4_data = document.createTextNode(i.quantity);
        td4.appendChild(td4_data);

        let td5 = document.createElement("td");
        let td5_data = document.createTextNode(i.cost);
        td5.appendChild(td5_data);

        tr.append(td1, td2, td3, td4, td5);

        document.getElementById("cart").appendChild(tr);
        console.log(tr);

    });


});