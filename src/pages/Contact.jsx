import '../Stylesheet/Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EmailIcon from '@mui/icons-material/Email';

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e)=>{
    e.preventDefault();

    emailjs.sendForm('service_3yb6vgg', 'template_j4fyw0q', form.current, '39ux1Bew-qOnkdp0A').then(
      (result)=>{
        console.log(result.text);
      },
      (error)=>{
        console.log(error.text);
      }
    );
  };

  return (
    <div className='contact'>
      <div className='left-side'>
        <h1>Lets chat.</h1>
        <h1>Tell me about your</h1>
        <h1>Company</h1>
        <p>Lets create something together <HandshakeIcon /></p>
        <div className='buble'>
          <EmailIcon  className='eicon'/>
          <div className='mai'>
            <p>Email me at:</p>
            <p className='purple'>Gregory.mmensah@gmail.com</p>
          </div>
        </div>
     </div>
     <div className='right-side'>
      <h1>Send a message <RocketLaunchIcon /></h1>
      <form ref={form} onSubmit={sendEmail}>
          <label>Full Name</label>
          <input className='name' name='name'type='text' id='name' placeholder='Enter your full Name*' required ></input>
          <label>Email</label>
          <input type='text' className='email' name='email'id='email'placeholder='Enter your email*'></input> 
          <lable>Message</lable>
          <textarea type='text' id='message' name='message'></textarea>
         <input type='submit' value='Send' id='sbtn'></input>
      </form>
     </div>
    </div>
  )
}

export default Contact