import logo from '../assets/logo.png'
import footerVideo from '../assets/footer.mp4'

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer py-5">
           
          {/* Background Video */}
          <video
            className="footer-video"
            src={footerVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="container">
            <div className="footer_contant">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <h1>Get a free quote. Call or send us an email today!</h1>

                <div className="contact-info mt-5">
                    <div className="contact-grou">
                      <h6 className="color-gold">Phone:</h6>
                      <p>+88-0133 99 22 929</p>
                    </div>
                    <div className="contact-grou">
                      <h6 className="color-gold">Email:</h6>
                      <p>nextwavedigital@hotmail.com</p>
                    </div>
                    <div className="contact-grou">
                      <h6 className="color-gold">Social:</h6>
                      <div className="social-icons d-flex gap-3 align-items-center">
                        <a href="https://www.facebook.com/share/1Ny5Rhr29h/" className="fs-3 text-white hover:text-gold transition-colors"><FaFacebook /></a>
                        <a href="https://www.facebook.com/share/1Ny5Rhr29h/" className="fs-3 text-white hover:text-gold transition-colors"><FaTwitter /></a>
                        <a href="https://www.facebook.com/share/1Ny5Rhr29h/" className="fs-3 text-white hover:text-gold transition-colors"><FaInstagram /></a>
                      </div>
                    </div>
                </div>
            </div>

           
          </div>
        </div>
  );
};

export default Footer;