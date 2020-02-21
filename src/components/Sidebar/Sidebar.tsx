import React from 'react';
import './Sidebar.scss';
import { IMain } from '../../types/types';

const Sidebar = ({status, toggleSidebar} : IMain)=>{
    return (
        <div className={`sidebar${(status) ? ' active' : ''}`}>
            <div className="sidebar__heading">
                <h2 className="sidebar__title">welcome, marija</h2>
                <a className="sidebar__close" onClick={()=> toggleSidebar(false)}>&times;</a>
            </div>
            <div className="sidebar__content">
                <h2 className="sidebar__title">menu</h2>
                <ul className="sidebar__list">
                    <li className="sidebar__list--item">home</li>
                    <li className="sidebar__list--item">friends</li>
                    <li className="sidebar__list--item">profile</li>
                    <li className="sidebar__list--item">settings</li>
                    <li className="sidebar__list--item">logout</li>
                </ul>
            </div>
            <div className="sidebar__heading">
                <h2 className="sidebar__title">built with&nbsp;<span>♥️</span>&nbsp;&nbsp;by ThePseudoMind</h2>
            </div>
        </div>
    );
}

export default Sidebar;