import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className='navbar'>
                <div className='container'>
                    <div className='nav-content'>
                        <div className='nav-logo'>
                            <img src='img/logo.png'></img>
                        </div>
                        <div className='nav-link'>
                            <Link to='/' >الصفحه الرئيسيه</Link >
                            <Link to='/Quran' > القراءة </Link>
                        </div>
                        <div className="top-header-menu">
                            <i onClick={() => setToggle(!toggle)} className="fa-solid fa-bars"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{top:toggle?'80px':'-50px'}} className='responseiv-link'>
                <Link  onClick={() => setToggle(false)} to='/' >الصفحه الرئيسيه</Link >
                <Link  onClick={() => setToggle(false)} to='Quran' > القراءة </Link>
            </div>
        </>
    )
}

export default Navbar