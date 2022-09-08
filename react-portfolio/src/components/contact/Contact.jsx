import React, {useRef} from 'react'
import emailjs from 'emailjs-com'
// assets
import { HiOutlineMail } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
// styles
import './Contact.css'

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0vl2r0j', 'template_23acuat', form.current, 'DJ7Qp3o8scYnrbik5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

		e.target.reset()
  };

	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<HiOutlineMail className="contact__option-icon"/>
						<h4>Email</h4>
						<h5>filipsarovic428@gmail.com</h5>
						<a href="mailto:filipsarovic428@gmail.com" target="_blank">Send a message</a>
					</article>
					<article className="contact__option">
						<RiMessengerLine className="contact__option-icon" />
						<h4>Messenger</h4>
						<h5>filipsarovic</h5>
						<a href="https://m.me/100003626033475" target="_blank">Send a message</a>
					</article>
					<article className="contact__option">
						<BsWhatsapp className="contact__option-icon" />
						<h4>WhatsApp</h4>
						<h5>+38766669467</h5>
						<a href="https://api.whatsapp.com/send?phone=+38766669467" target="_blank">Send a message</a>
					</article>
				</div>
				{/* END OF CONTACT OPTIONS */}
				<form ref={form} onSubmit={sendEmail}>
					<input 
						type="text" 
						name="name" 
						placeholder="Your Full Name" 
						required 
					/>
					<input 
						type="email" 
						name="email" 
						placeholder="Your Email" 
						required 
					/>
					<textarea 
						name="message"rows="7" 
						placeholder="Your Message" 
						required>
					</textarea>
					<button type="submit" className="btn btn-primary">Send Message</button>
				</form>
			</div>
		</section>
	)
}

export default Contact