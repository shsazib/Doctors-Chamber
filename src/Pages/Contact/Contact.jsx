import NavBar from '../NavBar/NavBar';
import './ContactStyle.css';
import Footer from '../Footer/Footer';
import { FaHome } from "react-icons/fa";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


const Contact = () => {
    return (
        <>
            {/* NavBar */}
            <NavBar />

            {/* fullContact */}
            <div className="fullContact">
                <div className="headar">
                    <div className='contact'>
                        <h1>Contact</h1>
                        <p>Belding years moveth earth green behold wherein</p>
                    </div>
                    <div className='home'>
                        <h6>Home▶Contact</h6>
                    </div>
                </div>

                {/* get-in-touch */}
                <h1 className='get-h1'>Get in Touch</h1>
                <div className="map">
                    <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7297.072450235397!2d90.37692547230861!3d23.87059694925907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c40fb857cb01%3A0xb6ca60a98b4c89e2!2sUttara%2012%20No.%20Sector%20park!5e0!3m2!1sen!2sbd!4v1644919646448!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="get-in">
                    <div className='input'>
                        <input type="text" className="nameInp" placeholder='Enter Your Name' />
                        <input type="email" className="emailInp" placeholder='Enter Your Email' />
                        <input type="text" className="subjectInp" placeholder='Enter Your Subject' />
                        <div className='textArea'>
                            <textarea placeholder='Enter Your Message'></textarea>
                        </div>
                        <button>SEND MESSAGE</button>
                    </div>
                    <div className="contactDetels">
                        <div className="home">
                            <FaHome className="icon" />
                            <div>
                                <h4>Dhaka, Bangladesh</h4>
                                <p>Uttara 12 Sector, Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <div className="phone">
                            <BsFillPhoneFill className="icon" />
                            <div>
                                <h4>+8801827892939</h4>
                                <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div className="email">
                            <MdEmail className="icon" />
                            <div>
                                <h4>shsazibbhuiyan892939@gmail.com</h4>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Contact;