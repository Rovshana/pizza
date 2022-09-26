import React from 'react'
import {useFormik} from 'formik'
import "../styles/Contact.css"
function Contact(props) {

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },

        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    

    return (
        < div className='container main'>
        <h1>test</h1>
        <form onSubmit={formik.handleSubmit} >
          
          
      
       <label htmlFor="firstName" className='contactLabel'>First Name</label>
       <input
        className='contactInput'
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
       <label htmlFor="lastName" className='contactLabel'>Last Name</label>
       <input
       className='contactInput'
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
      
   
     
       <label htmlFor="email" className='contactLabel'>Email Address</label>
       <input
        className='contactInput'
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <label htmlFor="email" className='contactLabel'>Write your message</label>
       <input
        className='contactInput'
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
     
       <div >
       <button type="submit" className="contactBtn">Submit</button>
       </div>
     </form>

            
        </div>
    )
}
export default Contact