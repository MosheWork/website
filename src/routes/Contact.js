import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";

function Contact() {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="lets have a chat" />
      <div><a
        href="https://wa.me/2348100000000"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a></div>
      <Footer />
    </div>
  );
}

export default Contact;
