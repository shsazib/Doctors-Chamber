import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBarStyle.css";
import { GrMenu } from "react-icons/gr";
import { CgClose } from "react-icons/cg";


const NavBar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <>
            <nav>
                <div className="logo">
                    <h1>medcare</h1>
                </div>
                <div className="main">
                    <ul className={clicked ? "menu-list" : "menu-list close"}>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/department">Department</Link></li>
                        <li><Link to="/doctors">Doctors</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    {clicked ? <CgClose /> : <GrMenu />}
                </div>
            </nav>
        </>
    )
}

export default NavBar;