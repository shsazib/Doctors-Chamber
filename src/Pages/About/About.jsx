import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './AboutStyle.css';
import QuestionsAns from '../Home/Components/QuestionsAns/QuestionsAns';
import DoctorImg from './Images/Doctor.jpg';


const About = () => {
    return (
        <>
            {/* NavBar */}
            <NavBar />

            {/* header */}
            <div className="fullAbout">
                <div className="headar">
                    <div className='about'>
                        <h1>About Us</h1>
                        <p>Belding years moveth earth green behold wherein</p>
                    </div>
                    <div className='home'>
                        <h6>Home▶About</h6>
                    </div>
                </div>
            </div>


            {/* fifth-container */}
            <div className="fifth-container">
                <div className="fifth-container-content">
                    <h1>Second Abundantly Move That Cattle Land</h1>
                    <p className='color-p'>Give their their without moving were stars called so divide in female.</p>
                    <p>Give their their without moving were stars called so divide female be moving night may fish him own male vreated great Give their their without moving were. Stars called so divide female moving night.</p>
                </div>
            </div>


            {/* eighth-container */}
            <QuestionsAns />


            {/* ninth-container */}
            <div className="ninth-container">
                <h1>Make An Appointment</h1>
                <label>Full Name:</label>
                <input type="text" placeholder='Your Name' />
                <label>Email:</label>
                <input type="text" placeholder='Your Email' />
                <label>Message:</label>
                <textarea placeholder='Message'></textarea>
                <button>Make An Appointment</button>
            </div>

            {/* thenth-container */}
            <div className="thenth-container">
                <img src={DoctorImg} alt="Doctor-Img" />
                <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sint impedit a itaque dignissimos ipsam maxime perspiciatis rerum."</p>
                <h4>-Dr. Sabrina Lorna-</h4>
            </div>

            {/* footer */}
            <Footer />
        </>
    )
}

export default About;