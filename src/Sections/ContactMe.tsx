import React from "react";

const ContactMe = () => {
  return (
    <section id="contact">
      <form className="contact__form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea name="message" placeholder="Message" defaultValue={""} />
        <input type="submit" defaultValue="Submit" />
      </form>
    </section>
  );
};

export default ContactMe;
