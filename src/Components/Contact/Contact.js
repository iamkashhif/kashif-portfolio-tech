import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
// email service
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y0j04ze",
        "template_odiobap",
        form.current,
        "bLmxD9GfLQSF_hLTv"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("current is", form.current);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const Alert = () => {
    alert("Successfuly received! ");
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Ways To Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option_icons" />
            <h4>Email</h4>
            <h5>iamkashhif@gmail.com</h5>
            <a href="mailto:iamkashhif@gmail.com?subject=subject text">
              Mail
            </a>
          </article>
          <article className="contact__option">
            <FiInstagram className="contact__option_icons" />
            <h4>Instagram</h4>
            <h5>iamkashhif</h5>

            <a href="https://www.instagram.com/iamkashhif/" target="_blank">
              Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option_icons" />
            <h4>Whatsapp</h4>
            <h5>+91 7769869980</h5>
            <a
              href="https://api.whatsapp.com/send?+91776986998"
              target="_blank"
            >
              Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder='"Enter Your Full Name'
            required
          />
          <input type="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button onClick={Alert} type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
