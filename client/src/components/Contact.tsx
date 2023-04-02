import { Flex } from '@chakra-ui/react'
import React from 'react'
import '../css/contact.css'
export default function Contact() {
  return (
    // <Flex
    //   id='contact'
    //   h={'90vh'}
    //   w={'100%'}
    //   bgColor={'#1A1A1D'}>
    <section id="contact">
      <h1 className="section-header">Contact Me</h1>

      <div className="contact-wrapper">


        <form id="contact-form" className="form-horizontal" role="form">

          <input type="text" className="form-control" id="name" placeholder="NAME" name="name" required />
          <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" required />
          <input type='text' className="form-control" id='messageFeild' placeholder="MESSAGE" name="message" required ></input>

          <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
            <div className="alt-send-button">
              <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
            </div>

          </button>

        </form>


        <div className="direct-contact-container">

          <div className="direct-contact-item">Bengaluru, Karnataka</div>
          <hr />
          <ul className="social-media-list">
            <li><a href="#" target="_blank" className="contact-icon">
              <ion-icon name="logo-github" ></ion-icon></a>
            </li>
            <li><a href="#" target="_blank" className="contact-icon">
            <ion-icon name="logo-linkedin"></ion-icon></a>
            </li>
            <li><a href="#" target="_blank" className="contact-icon">
            <ion-icon name="logo-instagram"></ion-icon></a>
            </li>            
          </ul>
          <hr />

          <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

        </div>

      </div>

    </section>

    // </Flex>
  )
}
