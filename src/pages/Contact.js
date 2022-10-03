import React from 'react'
import {useFormik} from 'formik'
import "../styles/Contact.css"
function Contact(props) {

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        },

        onSubmit: values => {
         
        },

        validate: (values)=>{
          let errors = {}
          if(!values.firstName){
            errors.firstName = "Please enter your name"
          }
          if(!values.lastName){
            errors.lastName = "Please enter your last name"
          }
          if(!values.email){
            errors.email = "Please enter your email"
          }else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)){
            errors.email = 'Invalid email format!'}

          return errors
        }
      });
    
    

    return (
        < div className='container main'>
        
        <form onSubmit={formik.handleSubmit}  className="form">
          
          
      
       
       <input
        className='contactInput'
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
         placeholder="First-name"
       />
        {formik.errors.firstName && <span className="error">{formik.errors.firstName}       </span>}
       
       <input
       className='contactInput'
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
         placeholder="Last Name"
       />
      
      {formik.errors.lastName && <span className="error">{formik.errors.lastName}       </span>}
     
       <input
        className='contactInput'
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
         placeholder="Email"
       />
       {formik.errors.email && <span className="error">{formik.errors.email}       </span>}
       <input
        className='contactInput'
         id="message"
         name="message"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.message}
         placeholder=" Write your message"

       />
    
     
       <button type="submit" className="contactBtn">Submit</button>
      
     </form>

            
        </div>
    )
}
export default Contact