const studentList = [];
let marks = 0;
function addGrade(){
 
  let name =   document.getElementById("student").value;
  let grade = document.getElementById("grade").value;
  marks += grade;
   const student = {
    name : name,
    grade : grade,
   }

   studentList.push(student);
   studentList.sort(function(a,b){return a.grade-b.grade});
  
   
   let result = `The List of students is `;
   for(let i = 0;i<studentList.length;i++)
   {  
      result += `${studentList[i].name}  ${studentList[i].grade}  ,`;
   }
   
   document.getElementById("list").innerHTML = result;

   

}

function findAverage(){
  
   document.getElementById("list").innerHTML = `The average marks is ${marks}`
}

function studentsList(){
    let result = `The List of students is `;
   for(let i = 0;i<studentList.length;i++)
   {  
      result += `${studentList[i].name}  ${studentList[i].grade}  ,`;
   }
   
   document.getElementById("list").innerHTML = result;
}