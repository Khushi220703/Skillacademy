import React, { useEffect, useState } from 'react'
import axios from 'axios'
const CardsApi = () => {

  const [response, setResponse] = useState([]);

  useEffect(() =>
    {
      post();
    },[]);
    const post = async () =>
    {
       

        try {
             
            const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
            
            setResponse( await data.data);
           
           
          
        } catch (error) {
            console.log(error);
        }
       
    }

    const postsStyle =
   {
      width: "30%",
      height: "40%",
      border:"2px solid red",
      margin:"10px",
      padding: "10px",
   }
   
   const containerStyle =
   {
      display: "flex",
      flexDirection: "row",
      flexWrap:"wrap",
      margin:"auto",
      width: "100%"
   }
 
   return(
    <div>
        <h1>The posts is here!</h1>

        <div className="container" style={containerStyle}>

        {
          response.map((item)=>{
            return(
              <div style={postsStyle}>
                <sapn >User id ${item.userId}</sapn>
                <span>Id is {item.id}</span>
                <p>Title: {item.title}</p>
                <p>Body: {item.body}</p>
              </div>
            )
          })
        }
        </div>
    </div>
   )

   
  
  
}

export default CardsApi
