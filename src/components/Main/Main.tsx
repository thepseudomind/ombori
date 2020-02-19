import React from 'react';
import './Main.scss';
import Navbar from '../Navbar/Navbar';
import Users from '../Users/Users';
import { IMain } from '../../types/types';

const Main = ({status, toggleSidebar} : IMain)=>{
    return (
       <div className={`main${(status) ? ' active' : ''}`}>
           <Navbar status={status} toggleSidebar={toggleSidebar}/>
           <Users status={status}/>
       </div> 
    );
}

export default Main;