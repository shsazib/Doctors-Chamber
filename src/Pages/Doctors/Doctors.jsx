import NavBar from '../NavBar/NavBar';
import './DoctorsStyle.css';
import Footer from '../Footer/Footer';
import ExpDoctorsAPI from '../Home/Components/ExpDoctors/ExpDoctorsAPI'
import ExpDoctors from '../Home/Components/ExpDoctors/ExpDoctors';


const Doctors = () => {
    return (
        <>
            <NavBar />
            <div className="fullDoctors">
                <div className="headar">
                    <div className='doctors'>
                        <h1>Doctors</h1>
                        <p>Belding years moveth earth green behold wherein</p>
                    </div>
                    <div className='home'>
                        <h6>Home▶Doctors</h6>
                    </div>
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

            {/* eleven-container */}
            <div className="eleven-container">
                <div className="img-container">
                    <h5 className="H-Line">Emergency hotline</h5>
                    <h1 className="H-Line">(+8801827892939)</h1>
                    <p className="H-Line">We provide 24/7 customer support. Please feel free to contact us<br />for emergency case.</p>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Doctors;