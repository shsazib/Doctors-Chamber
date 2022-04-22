import NavBar from '../NavBar/NavBar'
import './BlogStyle.css';
import Footer from '../Footer/Footer';

import Img1 from './Images/blmg-1.jpg';
import Img2 from './Images/blmg-2.jpg';
import Img3 from './Images/blmg-3.jpg';
import Img4 from './Images/blmg-4.jpg';
import Img5 from './Images/blmg-5.jpg';
import Img6 from './Images/blmg-6.jpg';
import Img7 from './Images/blmg-7.jpg';
import Img8 from './Images/blmg-8.jpg';
import Img9 from './Images/blmg-9.jpg';
import Img10 from './Images/blmg-10.jpg';
import Img11 from './Images/blmg-11.jpg';
import Img12 from './Images/blmg-12.jpg';
import Img13 from './Images/blmg-13.jpg';
import Img14 from './Images/blmg-14.jpg';
import Img15 from './Images/blmg-15.jpg';
import Img16 from './Images/blmg-16.jpg';


const Blog = () => {
    return (
        <>
            {/* NavBar */}
            <NavBar />

            {/* fullBlog */}
            <div className="fullBlog">
                <div className="headar">
                    <div className='blog'>
                        <h1>Blog</h1>
                        <p>Belding years moveth earth green behold wherein</p>
                    </div>
                    <div className='home'>
                        <h6>Home▶Blog</h6>
                    </div>
                </div>


                {/* Image Gallery */}
                <div className="image-gallery">
                    <h1>Image Gallery</h1>
                    <div className="gallery1">
                        <img className="img1" src={Img3} alt="img" />
                        <img className="img2" src={Img9} alt="img" />
                        <img className="img3" src={Img10} alt="img" />
                    </div>
                    <div className="gallery2">
                        <img className="img4" src={Img1} alt="img" />
                        <img className="img5" src={Img7} alt="img" />
                        <img className="img6" src={Img8} alt="img" />
                        <img className="img7" src={Img13} alt="img" />
                        <img className="img8" src={Img15} alt="img" />
                    </div>
                    <div className="gallery3">
                        <img className="img9" src={Img2} alt="img" />
                        <img className="img10" src={Img3} alt="img" />
                    </div>
                    <div className="gallery4">
                        <img className="img11" src={Img4} alt="img" />
                        <img className="img12" src={Img5} alt="img" />
                        <img className="img13" src={Img6} alt="img" />
                    </div>
                    <div className="gallery5">
                        <img className="img14" src={Img11} alt="img" />
                        <img className="img15" src={Img12} alt="img" />
                        <img className="img16" src={Img14} alt="img" />
                        <img className="img17" src={Img16} alt="img" />
                    </div>
                </div>
            </div>
            
            {/* Footer */}
            <Footer />
        </>
    )
}

export default Blog;