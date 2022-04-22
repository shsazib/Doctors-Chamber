import React from 'react';
import './FooterStyle.css';

import Com1 from './Images/com-1.png';
import Com2 from './Images/com-2.png';
import Com3 from './Images/com-3.png';
import Com4 from './Images/com-4.png';
import Com5 from './Images/com-5.png';

const Footer = () => {
    return (
        <>
            {/* compony-container */}
            <div className="compony-container">
                <img src={Com1} alt="company" />
                <img src={Com2} alt="company" />
                <img src={Com3} alt="company" />
                <img src={Com4} alt="company" />
                <img src={Com5} alt="company" />
            </div>

            {/* footer-container */}
            <div className="footer-container">
                <div className="com-deteles">
                    <div className="deteles">
                        <h4>Top Products</h4>
                        <p>Managed Website</p>
                        <p>Manage Reputation</p>
                        <p>Power Tools</p>
                        <p>Marketing Service</p>
                    </div>
                    <div className="deteles">
                        <h4>Quick Links</h4>
                        <p>Jobs</p>
                        <p>Brand Assets</p>
                        <p>Investor Relations</p>
                        <p>Terms of Service</p>
                    </div>
                    <div className="deteles">
                        <h4>Features</h4>
                        <p>Jobs</p>
                        <p>Brand Assets</p>
                        <p>Investor Relations</p>
                        <p>Terms of Service</p>
                    </div>
                    <div className="deteles">
                        <h4>Resources</h4>
                        <p>Guides</p>
                        <p>Research</p>
                        <p>Experts</p>
                        <p>Agencies</p>
                    </div>
                    <div className="deteles">
                        <h4>Newsletter</h4>
                        <p>You can trust us. we only send promo offers.</p>
                        <div className="inp-button">
                            <input type="text" placeholder='Your Email Address' />
                            <button>Click</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* copyright-container */}
            <div className="copyright-container">
                <p>Copyright ©2022 All rights reserved | This template is made with  by 💙 <b><a href="https://shsazib.netlify.app/" target="blank">SH Sazib</a></b></p>
            </div>
        </>
    )
}

export default Footer;