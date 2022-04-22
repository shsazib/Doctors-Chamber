import NavBar from '../NavBar/NavBar';
import './DepartmentStyle.css';
import Footer from '../Footer/Footer';
import ServicesAPI from '../Home/Components/Services/ServicesAPI';
import ServicesCard from '../Home/Components/Services/ServicesCard';
import QuestionsAns from '../Home/Components/QuestionsAns/QuestionsAns';


const Department = () => {
    return (
        <>
            {/* NavBar */}
            <NavBar />

            {/* fullDepartment */}
            <div className="fullDepartment">
                <div className="headar">
                    <div className='department'>
                        <h1>Department</h1>
                        <p>Belding years moveth earth green behold wherein</p>
                    </div>
                    <div className='home'>
                        <h6>Home▶Department</h6>
                    </div>
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

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Department;