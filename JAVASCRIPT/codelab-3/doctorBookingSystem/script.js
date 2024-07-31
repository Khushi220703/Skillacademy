//getting patients details.
let patient = JSON.parse(localStorage.getItem("patient")) || [];

function store(){
    let id = patient.length+1;
    let pName = document.getElementById("patient").value;
    let doctor = document.getElementById('doctor').value;
    let date = document.getElementById("date").value;
    
   const obj = {
    id:id,
    name:pName,
    doctor:doctor,
    date:date
   }
   patient.push(obj);
    
   localStorage.setItem("patient",JSON.stringify(patient));
  
}

function cancel(){
  let id_1 = document.getElementById("id").value;

  delete patient[id_1-1];
  localStorage.setItem("patient",JSON.stringify(patient));
}

//function to display the appoitments.
function show(){
    const result = JSON.parse(localStorage.getItem("patient"));
    console.log(result);

    result.map((obj)=>{
      if(obj != null){
      const tr = document.createElement("tr");
      const id = document.createElement("td");
      const id_data = document.createTextNode(obj.id);
      id.appendChild(id_data);

      const pName = document.createElement("td");
      const pName_data = document.createTextNode(obj.name);
      pName.appendChild(pName_data);

      const dName = document.createElement("td");
      const dName_data = document.createTextNode(obj.doctor);
      dName.appendChild(dName_data);

      const date = document.createElement("td");
      const date_data = document.createTextNode(obj.date);
      date.appendChild(date_data);

      tr.append(id,pName,dName,date);

      document.getElementById("table").appendChild(tr);
      }

    })
}