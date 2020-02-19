import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';
import { IMain } from '../../types/types';

const Navbar = ({status, toggleSidebar} : IMain)=>{
    return (
        <nav className="navbar">
            <FontAwesomeIcon icon={faUser} size="2x"/>
            <div className="navbar__logo">
                ombori
            </div>
            {
                status ? <span></span> : 
                <span className="navbar__menu" onClick={()=>toggleSidebar(true)}>
                    <span className="navbar__menu--icons"></span>
                </span>
            }
        </nav>
    );
}

export default Navbar;