import React from 'react'
import './Contact.modules.css'


// eslint-disable-next-line
// const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const [inputs, setImputs] = React.useState({
  name: '',
  email: '',
  message: '',
})

const [errors, setErrors] = React.useState({
  name: '',
  email: '',
  message: '',
})

export default function Contact() {
  return (
    <div>
      <form action="">
        <label htmlFor="">Nombre</label>
        <input type="text" name='name' placeholder='Marcelo' />
        <label htmlFor="">Correo electrónico</label>
        <input className='name' value={inputs.name} type="text" name='email' placeholder='Escribe tu email'  />
        <label htmlFor="">Mensaje:</label>
        <textarea type="text" name="message" placeholder='Escribe tu mensaje' ></textarea>
        <button type='submit'>enviar</button>
      </form>
    </div>)
}
