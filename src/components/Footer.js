import React from 'react'
import "../styles/Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

 function Footer(props) {
    

    return (
        <div className='footer'>
            <div className='socialMedia'>
                <InstagramIcon/>
                <FacebookIcon/>
                <TwitterIcon/>

            </div>
            <p>&copy: 2022 yummypizzas</p>
       
            
        </div>
    )
}
export default Footer