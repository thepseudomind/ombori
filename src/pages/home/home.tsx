import React, {useState} from 'react';
import './home.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Main from '../../components/Main/Main';

const Home = () =>{
    const [status, sidebarStatus] = useState(false);

    const toggleSidebar = (status: boolean)=>{
        sidebarStatus(status);
    }

    return (
        <main className="home">
            <Main status={status} toggleSidebar={toggleSidebar}/>
            <Sidebar status={status} toggleSidebar={toggleSidebar}/>
        </main>
    );
}

export default Home;