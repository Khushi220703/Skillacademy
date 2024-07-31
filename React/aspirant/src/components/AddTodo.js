
import React, { useEffect, useState } from 'react'
const AddTodo = () => {
    const [pageNumber, setPageNumber] = useState(false);
    const [flipped, setflipped] = useState(true);
    const [name,setName] = useState("");
    const [desc, setDesc] = useState("");
    const [deadline, setDeadline] = useState("");
    
    const addWork = () =>
    {
        setPageNumber(!pageNumber); 
    }
    
    const changePage = () =>
    {  
        setflipped(!flipped)
    }

    var intWorks;
    if(localStorage.getItem("works") === null)
    {
        intWorks = [];
    }
    else
    {
        intWorks = JSON.parse(localStorage.getItem("works"));
    }

    var intDone;

    if(localStorage.getItem("dones") === null)
    {
        intDone = [];
    }
    else
    {
        intDone = JSON.parse(localStorage.getItem("dones"));
    }

    const done = (item) =>{
        console.log("completed");
   
        setWorks(works.filter((e)=>{
           return e != item;
        }));
   
        setDones([...dones,item])
     
   
      }
      const [dones, setDones] = useState(intDone);

      useEffect(() =>{
        localStorage.setItem("dones", JSON.stringify(dones));
    },[dones]);
    const handleSubmit = () =>
    { 
        let id;
        works.length === 1 ? id = 0 : id = works.length;

        const data = {
            id: id,
            name: name,
            desc: desc,
            deadline: deadline,
        }
        alert("kk");
        setWorks([...works, data]);
       
    }  
    
    const deleting = (id) =>
    {
        console.log("done");
        console.log(id);
        setWorks(works.filter((e)=>{
            return e != id;
        }));
    }

  
   

    const [works, setWorks] = useState(intWorks);
   
    useEffect(() =>{
        localStorage.setItem("works", JSON.stringify(works));
    },[works]);

    console.log(dones);

   
    
  return (
    <div className='todo' >
        <div className='todoLogo'>
            <h3 className='logo'>Aspirant</h3>
            <span className="sublogo">Aspirant for Aspirants</span>
        </div>

       <div className="book" style={pageNumber === true ?{ display:"none"} : {display:"block"}}>

        <div className="toComplete work" id='page1' style={flipped === true ?{ display:"none"} : {display:"block"}}>
           
                <p style={{display:"inline"}}>Pending....</p>
                <button className="addTodoButton"  style={{display:"inline",position:"relative",top:"8px", left:"300px"}} onClick={() => changePage()}>Check completed</button>
           
           
           
            
           {works.length === 0 ? <h1>Add todo</h1> : works.map((item) =>{
              return( <dl className="workList">
                <dt className="list"><span>{item.name}</span> <span title='delete the task' className='delete icon' onClick={() => deleting(item)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                </svg></span><span title='Task completed' onClick={() => done(item)} className='done icon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg></span></dt>

                <dd><span>{item.desc}</span><span>{item.deadline}</span></dd>
                
               
           </dl>)})
           }
           
            <button className="addTodoButton" onClick={addWork}>Add work</button>


        </div>

        <div className="completed work" id='page3' style={flipped === true ?{ display:"block"} : {display:"none"}}>
            <p >Completed</p>
            <button className="addTodoButton"  style={{display:"inline",position:"relative",top:"-37px", left:"400px"}} onClick={changePage}>Check completed</button>
            <ul className="completedTask">
              {
                dones.map((item)=>{
                    return(
                        <li className="completedlist">{item.name}</li>
                    )
                })
              }
                
            </ul>
            <button className="addTodoButton" onClick={addWork}>Add work</button>
        </div>

        </div>

        <div className="addWork" style={pageNumber === true ?{ display:"block"} : {display:"none"}}>
              <form  className="addTask" onSubmit={handleSubmit}>
                    <label htmlFor="taskName">Task name</label><br />
                    <input type="text" name="taskName" id="taskName"  onChange={(e)=>setName(e.target.value)}/><br/>

                    <label htmlFor="taskDesc">Task descrption</label><br/>
                    <input type='text' name='taskDesc' id='taskDesc' onChange={(e)=>setDesc(e.target.value)}/><br/>

                    <label htmlFor="taskDeadline">Deadline</label><br/>
                    <input type="datetime-local" name="taskDeadline" id="taskDeadline" onChange={(e)=>setDeadline(e.target.value)}/><br/>

                    <button type="submit" className='addTaskButton'  >Add task</button>

              </form>
        </div>

       
       

    </div>
  )
}

export default AddTodo
