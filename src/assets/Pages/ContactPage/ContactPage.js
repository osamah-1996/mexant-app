import React from 'react'
import "./ContactPage.css"
import ContactPageHero from '../../../Componenets/ContactPageHero/ContactPageHero'
import GoogleMap from '../../../Componenets/GoogleMap/GoogleMap'
import ContactForm from '../../../Componenets/ContactForm/ContactForm'

const ContactPage = () => {
  return (
    <div>
      <ContactPageHero/>
      <GoogleMap/>
      <ContactForm/>
    </div>
  )
}

export default ContactPage