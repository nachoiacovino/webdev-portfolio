import React, { useState } from 'react'
import './Contact.scss'
import Divider from '../Divider/Divider'
import useInputState from '../../hooks/useInputState'

const Contact = () => {
    const [status, setStatus] = useState("")
    const [name, setName, resetName] = useInputState("")
    const [email, setEmail, resetEmail] = useInputState("")
    const [phone, setPhone, resetPhone] = useInputState("")
    const [message, setMessage, resetMessage] = useInputState("")

    const submitForm = e => {
        e.preventDefault()
        const form = e.target
        const data = new FormData(form)
        const xhr = new XMLHttpRequest()
        xhr.open(form.method, form.action)
        xhr.setRequestHeader("Accept", "application/json")
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return
          if (xhr.status === 200) {
            form.reset()
            resetName()
            resetEmail()
            resetPhone()
            resetMessage()
            setStatus("SUCCESS")
          } else {
            setStatus("ERROR")
          }
        }
        xhr.send(data)
    }

    return (
        <>
        <div className="anchor" id="contact" />
        <section className="page-section" id="contactStyles">
            <div className="container">
                {/* Contact Section Heading */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
                    Contact Me
                </h2>
                <Divider />
                {/* Contact Section Form */}
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                    <form onSubmit={submitForm} action="https://formspree.io/xzbdyzez" method="POST" id="contactForm" name="sentMessage">
                            <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                <label htmlFor="name" className="form-hidden">Name</label>
                                <input className="form-control" id="name" name="name" value={name} onChange={setName} type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                <label htmlFor="email" className="form-hidden">Email</label>
                                <input className="form-control" id="email" name="email" value={email} onChange={setEmail} type="email" placeholder="Your Email *" required data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                <label htmlFor="phone" className="form-hidden">Phone</label>
                                <input className="form-control" id="phone" name="phone" value={phone} onChange={setPhone} type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                <label htmlFor="message" className="form-hidden">Message</label>
                                <textarea className="form-control" id="message" name="message" value={message} onChange={setMessage} placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-lg-12 text-center">
                                {/* <div id="success"></div> */}
                                
                            {status === "SUCCESS" 
                            ?   <div className='alert alert-success'>
                                    <button type='button' className='close' data-dismiss='alert' aria-hidden='true'>&times;</button>
                                    <strong>Your message has been sent. </strong>
                                </div>
                            :   <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                            }
                            {status === "ERROR" && 
                                <div className='alert alert-danger mt-3'>
                                    <button type='button' className='close' data-dismiss='alert' aria-hidden='true'>&times;</button>
                                    <strong>Sorry {name}, it seems that my mail server is not responding. Please try again later!</strong>
                                </div>
                            }



                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact
