import React from 'react'
import "../css/assign1.css"
import Photo from "../images/scenery.jpg"
const Card = () => {
  return (
    <div>
        <div className='card-0'>
        <h1>React card component</h1>
        <div className="card-1">
            <img src={Photo} alt="sceenery"  />
            <div className='card-1-a'>
                <p>Moutains</p>
                <p>Art by me</p>
                <p>Khushbu Jha</p>
                
            </div>
        </div>
        </div>
    </div>
  )
}

export default Card
