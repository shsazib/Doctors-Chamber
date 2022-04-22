import NavBar from '../NavBar/NavBar';
import './HomeStyle.css';
import { GiSquare, GiLoveInjection } from "react-icons/gi";
import { MdOutlineEarbuds } from "react-icons/md";
import ServicesCard from './Components/Services/ServicesCard';
import ServicesAPI from './Components/Services/ServicesAPI';
import ExpDoctorsAPI from './Components/ExpDoctors/ExpDoctorsAPI';
import ExpDoctors from './Components/ExpDoctors/ExpDoctors';
import QuestionsAns from './Components/QuestionsAns/QuestionsAns';
import Doctor from './Images/doctor-img-3.jpg';
import GetUpdate from './Components/GetUpdate/GetUpdate';
import GetUpdateAPI from './Components/GetUpdate/GetUpdateAPI';
import Footer from '../Footer/Footer';




const Home = () => {
    return (
        <>
            <NavBar className="NavBar" />

            {/* first-continer */}
            <div className="main-div">
                <div className="first-container">
                    <div className="part-one">
                        <h1>Making Health <br /> Care Better Together</h1>
                        <p>Also you dry creeping beast multiply fourth abundantly our itsel signs bring our. Won form living. Whose dry you seasons divide given gathering great in whose you'll greater let livein form beast sinthete better together these place absolute right.</p>
                        <div className="btn">
                            <button>Make An Appointment</button>
                            <button>View Department</button>
                        </div>
                    </div>
                </div>

                {/* second-container */}
                <div className="second-container">
                    <div className="card">
                        <GiSquare className='icon' />
                        <h2>Primary Care</h2>
                        <p>An so vulgar to on points wanted rapture ous resolving continued household</p>
                    </div>
                    <div className="card">
                        <GiLoveInjection className='icon' />
                        <h2>Emergency Cases</h2>
                        <p>An so vulgar to on points wanted rapture ous resolving continued household</p>
                    </div>
                    <div className="card">
                        <MdOutlineEarbuds className='icon' />
                        <h2>Online Appointment</h2>
                        <p>An so vulgar to on points wanted rapture ous resolving continued household</p>
                    </div>
                </div>

                {/* third-container */}
                <div className="third-container">
                    <div className="content">
                        <h1>Awesome <br /> Health Service</h1>
                        <p>Land meat winged called subdue without very light in all years sea appear midst forth image him third there set. Land meat winged called subdue without very light in all years sea appear</p>
                    </div>
                </div>

                {/* fourth-container */}
                <div className="fourth-container">
                    <div className="cards">
                        {ServicesAPI.map((val) => {
                            return (
                                <>
                                    <ServicesCard
                                        key={val.id}
                                        img={val.img}
                                        h2={val.h2}
                                        p={val.p}
                                    />
                                </>
                            )
                        })}
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

                {/* sixth-container */}
                <div className="sixth-container">
                    <div className="content">
                        <h1>Medcare <br /> Experience Doctors</h1>
                        <p>Land meat winged called subdue without very light in all years sea appear midst forth image him third there set. Land meat winged called subdue without very light in all years sea appear</p>
                    </div>
                </div>

                {/* seventh-container */}
                <div className="seventh-container">
                    {ExpDoctorsAPI.map((val) => {
                        return (
                            <>
                                <ExpDoctors
                                    img={val.img}
                                    h1={val.h1}
                                    p={val.p}
                                    phone={val.phone}
                                />
                            </>
                        )
                    })}
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
                    <img src={Doctor} alt="Doctor" />
                    <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sint impedit a itaque dignissimos ipsam maxime perspiciatis rerum."</p>
                    <h4>-Dr. Sabrina Lorna-</h4>
                </div>

                {/* eleven-container */}
                <div className="eleven-container">
                    <div className="img-container">
                        <h5 className="H-Line">Emergency hotline</h5>
                        <h1 className="H-Line">(+8801827892939)</h1>
                        <p className="H-Line">We provide 24/7 customer support. Please feel free to contact us<br />for emergency case.</p>
                    </div>
                </div>

                {/* twelve-container */}
                <div className="twelve-container">
                    <div className="content">
                        <h1>Get Every <br /> Single Update Here</h1>
                        <p>Land meat winged called subdue without very light in all years sea appear midst forth image him third there set. Land meat winged called subdue without very light in all years sea appear</p>
                    </div>
                </div>


                {/* thirteen-container */}
                <div className="thirteen-container">
                    {GetUpdateAPI.map((val) => {
                        return (
                            <>
                                <GetUpdate
                                    img={val.img}
                                    p={val.p}
                                    h2={val.h2}
                                />
                            </>
                        )
                    })}
                </div>

                {/* Footer */}
                <Footer />

            </div>
        </>
    )
}

export default Home;