import React from 'react';
import image10_png from '../image/image10_png.png';
import image_png from '../image/image_png.png';



function ContactMe() {
    return (
      // Your Contact Me section JSX code here
      <div className="contact_me" id="five">
  <div id="ff"><label>Contact</label></div>
  <hr />
  <div id="f2">
    <div id="f2a"><img src={image10_png} alt="" /></div>
    <div id="f2b"><label>Follow me on :</label></div><br />
    <div id="f3">
      <div id="f3a"><a href="https://www.linkedin.com/in/hala-dieabs-98601327a/" target="_blank"><i className="fa-brands fa-linkedin fa-4x"></i></a></div>
      <div id="f3b"> <a href="https://github.com/Haladieabs" target="_blank"><i className="fa-brands fa-github fa-4x"></i></a></div>
      <div id="f3c"> <a href="https://wa.me/0790631594" target="_blank"><i className="fa-brands fa-whatsapp fa-4x" style={{ color: '#000000' }}></i></a></div>
      <div id="f3d"><a href="mailto:test@gmail.com"><i className="fa-solid fa-envelope fa-4x" style={{ color: '#000000' }}></i></a></div>
    </div><br />
    <div id="po"><label>Copyright <i className="fa-regular fa-copyright"></i> 2023 Hala Dieabs</label></div><br />
    <div id="ps"><img src={image_png} alt="" height="4%" width="3%" /></div>
  </div>
</div>
    );
  }
  
  export default ContactMe;