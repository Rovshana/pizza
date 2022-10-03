import React from 'react'
import "../styles/About.css"
import restaurant from'../assets/restaurant.jpg'
import pizza from '../assets/pizza.jpg'
 function About(props) {
    

    return (
        <div className = "container">
            <div>
            <img src={pizza} alt=".." style={{width: "100%", height: "300px", objectFit: "cover"}} />
            </div>
            <div>
                <h3 className='aboutTitle'>ABOUT US</h3>
                <span className='line'></span>
                <p className='content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

            </div>
        
        </div>
    )
}
export default About