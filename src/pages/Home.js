import React from 'react'
import {Link} from 'react-router-dom'
import Pizza from '../assets/pizza.jpeg'
import "../styles/Home.css"
import {useTranslation} from "react-i18next"
 function Home(props) {
    
const {t} = useTranslation()
    return (
        <div className='home' style={{backgroundImage: `url(${Pizza})`}}>
            <div className='headerContainer' >
                <h1 className='title1'>Yummy Pizzas :)</h1>
                <h2 className='title2'>{t("pizzas to fit any taste")}</h2>
                <Link to="/menu">
                <button>{t("order now")}</button>
                </Link>

            </div>
           
        </div>
    )
}
export default Home