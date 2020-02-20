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
                <h2 className="sidebar__title">sort by</h2>
                <ul className="sidebar__list">
                    <li className="sidebar__list--item">none</li>
                    <li className="sidebar__list--item">by asc</li>
                    <li className="sidebar__list--item">by id</li>
                    <li className="sidebar__list--item">by size</li>
                    <li className="sidebar__list--item">by price</li>
                </ul>
            </div>
            <div className="sidebar__heading">
                <h2 className="sidebar__title">built with&nbsp;<span>♥️</span>&nbsp;&nbsp;by ThePseudoMind</h2>
            </div>
        </div>
    );
}

export default Sidebar;