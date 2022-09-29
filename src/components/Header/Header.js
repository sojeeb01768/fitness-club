import React from 'react';
import './Header.css';
import logo from '../../image/fitnessLOGO.png'

const Header = () => {
    return (
        <div >
            <div className='header '>
                <img className='header-logo' src={logo} alt="" />
            <h1 className="">Fitness Club</h1>
            </div>
            <h3 className='mt-5 pt-5 ms-5 ps-5 text-primary fs-2'> Select today’s exercise</h3>

        </div>
    );
};

export default Header;