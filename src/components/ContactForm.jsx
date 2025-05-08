import React from 'react'
import { useState } from 'react'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        licenseType: '',
        message: ''
     });
        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.targetvalue })
        }
   
  return (
   <p>ContactForm</p>
  )
}

export default ContactForm