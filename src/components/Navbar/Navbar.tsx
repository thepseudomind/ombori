import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';
import { IMain } from '../../types/types';

const Navbar = ({status, toggleSidebar} : IMain)=>{
    return (
        <nav className="navbar">
            <FontAwesomeIcon icon={faUserCircle} size="3x" onClick={()=>{}}/>
            <div className="navbar__logo">
                ombori
            </div>
            <span className="navbar__menu" onClick={()=>toggleSidebar(true)}>
                <span className={`navbar__menu--icons${(status) ? ' inactive' : ''}`}></span>
            </span>
        </nav>
    );
}

export default Navbar;