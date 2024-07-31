import React, { useEffect, useState } from 'react'
import "../css/form.css"

const Form = () => {

   

    var initFormState = 0;

    if(localStorage.getItem("formState")=== null)
    {
            initFormState = 0;
    }
    else
    {
        initFormState = JSON.parse(localStorage.getItem("formState"));
    }

   

    function Change (a)
    { 
       alert(localStorage.getItem("formState"))
        setFormState(a);

       
    }
    const [formState, setFormState] = useState(initFormState);
    useEffect(()=>{
        localStorage.setItem("formState", JSON.stringify(formState))
    },[formState]);
   
    switch(formState)
    { 
        case 0:
           
            return (
                <div id='signup'>
                
                    <form id='signup-form'>
                        <h1>Sign Up!</h1>
                        <h4>Create acoount</h4>
            
                        <div className="details">
                            <label htmlFor="username">Username</label>
                            <input type="text" id='username' name='username'/><br/>
            
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' name='email' /><br/>
            
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' name='password' /><br/>
                        </div>
            
                        <button type='submit' id='signup-submit'>Submit</button><br/>
            
                        <button onClick={() => Change(1)} id='signup-signin'>Have an account</button>
                    </form>
                </div>
              )
            
          
        
        case 1:
            return (
                <div id='signup'>
                  <form id='signup-form' >
                    <h1>Welcome back!</h1>
                     <h4>Login</h4> 
            
                        <div className='details'>
                    
                         <label htmlFor="username">Username</label>
                         <input type="text" id='username' name='username' />
                         <br/>
            
                         <label htmlFor="passowrd">Password</label>
                         <input type="passowrd" id='passowrd' name='password' />
                         <br/>
            
                         <button onClick={() => Change(2)} id='forgot'>Forgot passowrd?</button>
            
                         </div>
            
                         <button type='submit' id='signup-submit'>Submit</button>  
            
                         <button onClick={() => Change(0)} id='signup-signin'>Create an account</button>
            
            
                     </form>
                </div>
              )
            

        case 2:
            return (
                <div className='reset'>
                    
                    <form className='reset-form'>
            
                        <h1>Reset password!</h1>
                        <p>Reset passowrd</p>
            
                        <div id='reset-div'>
            
                            <h2>A reset link will be sent to your Email!</h2>
                            <label htmlFor="email">Email</label>
                            <input type="text" name='email' id='email' />
            
                        </div>
            
                        <button id='reset-submit'>Send reset link</button>
            
                        <button onClick={() => Change(1)} id='reset-signin' >Go back!</button>
                    </form>
                </div>)
            

        default:
            
             return ;


    }
  
}

export default Form
