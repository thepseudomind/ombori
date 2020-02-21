import React, {useState, useEffect} from 'react';
import './Users.scss';
import User from '../User/User';
import Loader from '../Loader/Loader';
import { IMain, IProduct } from '../../types/types';
import NotificationBox from '../NotificationBox/NotificationBox';

const Users = ({status} : IMain)=>{
    enum loadMoreUsers { inactive=0, loading=1, foundUsers=2, noMoreUsers = 3};
    const [totalUsers, setTotal] = useState(0);
    const [fetchedUsers, setUsers] = useState([]);
    const [usersToRender, addToRender] = useState([]);
    const [loadingMoreUsers, loadingStatus] = useState(loadMoreUsers[0]);
    const [pageToFetch, changePage] = useState(1);

    // Fetch first batch of users
    useEffect(()=>{
        setUsers([]);
        setTimeout(()=>{
            fetch(`https://reqres.in/api/users?page=${pageToFetch}`)
            .then(
                res => res.json()
            ).then(
                results => {
                    setUsers(results.data);
                    setTotal(results.total);
                    console.log(results.data);
                }
            );
        },3000);
    }, []);

   // Users to render
   useEffect(()=>{
        let productsCollected : [] = [];
        fetchedUsers.forEach((v, i)=>{
            productsCollected.push(v);
        });
        addToRender(productsCollected);
   }, [fetchedUsers]);
   
   // Add to the users to be rendered
    const addToProducts = (start : number)=>{
        try {
            loadingStatus(loadMoreUsers[1]);
            setTimeout(()=>{
                fetch(`https://reqres.in/api/users?page=${start+1}`)
                .then(
                    res => res.json()
                ).then(
                    results => {
                        if((results.data.length + start) < totalUsers){
                            let productsCollected : [] = [];
                            results.data.forEach((v: never, i : number)=>{
                                productsCollected.push(v);
                            });
                            addToRender([...usersToRender, ...productsCollected]);
                            changePage(start + 1);
                            loadingStatus(loadMoreUsers[0]);
                        }
                    }
                );
            }, 2000);  
        } catch (e) {
            throw e; 
        }
    } 

   // Detect when user has reached end of products 
   const handleScroll = (e: any)=>{
        if(e.target.offsetHeight + e.target.scrollTop === e.target.scrollHeight){
            (totalUsers === usersToRender.length) ? loadingStatus(loadMoreUsers[3]) : addToProducts(pageToFetch);
        }
        // Reseting loading status
        setTimeout(()=>{
            loadingStatus(loadMoreUsers[0]);
        },2000)
   }
   
   // Render preloader upon page load (no products) or fetched Product list when available
    return (
        <div className="users" onScroll={handleScroll}>
            <div className={`row${(status) ? ' active' : ''}`}>
                {
                    (fetchedUsers.length === 0) ? <Loader mini={false}/> :
                    usersToRender.map((v : IProduct, i : number) => <User key={v.id} id={v.id} email={v.email} first_name={v.first_name} last_name={v.last_name} avatar={v.avatar}/> )
                }
            </div>
            {loadingMoreUsers === loadMoreUsers[1] ? <Loader mini={true}/> : <span></span> /* Show mini preloader when fetching more users */} 
            {loadingMoreUsers === loadMoreUsers[3] ? <NotificationBox message={loadMoreUsers[3]}/> : <span></span> /* Show notification when there's no more users */}
        </div>
    );
}

export default Users;