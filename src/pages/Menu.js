import React, { useState } from 'react'
import { menuApi } from '../api/pizza'
import {useEffect} from 'react'
import "../styles/Menu.css"
import test from '../assets/logo1.png'

import Checkbox from '@mui/material/Checkbox';
import { FavoriteBorder } from '@mui/icons-material'
import Favorite from '@mui/icons-material/Favorite';
 function Menu(props) {
    const [data, setData] = useState([])
    useEffect(() => {
          getPizza()      
    }, [])
    
    const getPizza = ()=>{
        menuApi.then(res=>{
            console.log(res.data.pizza)
            setData(res.data.pizza)
        })
    }
    return (
        <div  className = "container" style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap" }} bgcolor={"background.default"}>
           
            {
                data?.map((item, index)=>(
                    <div >
                <div className='card'>
                <Checkbox sx={{position: 'absolute', right: "0"}} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}} />}  />
                <div>
                    <img src={item.photo} alt="" style={{width: "200px", height: "200px"}} className="photo"/>
                </div>
                <div className='content'>
                    <p className='name'>{item.name}</p>
                    <p className='price'> Price: {item.price}</p>

                </div>
                </div>
                
            </div>

                ))
            }
            
            
        </div>
    )
}
export default Menu 