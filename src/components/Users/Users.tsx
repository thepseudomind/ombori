import React, {useState, useEffect} from 'react';
import './Users.scss';
import User from '../User/User';
import Preloader from '../Preloader/Preloader';
import Loader from '../Loader/Loader';
import { IMain, IProduct } from '../../types/types';

const Users = ({status} : IMain)=>{
    enum loadMoreUsers { inactive=0, loading=1, foundUsers=2, noMoreUsers = 3};
    const [fetchedUsers, setUsers] = useState([]);
    const [usersToRender, addToRender] = useState([]);
    const [loadingMoreUsers, loadingStatus] = useState(loadMoreUsers[0]);
    const [pageToFetch, changePage] = useState(1);

    // Fetch first batch of users
    useEffect(()=>{
        setUsers([]);
        fetch(`https://reqres.in/api/users?page=${pageToFetch}`)
        .then(
            res => res.json()
        ).then(
            results => {
                setUsers(results.data);
                console.log(results.data);
            }
        );
    }, []);

   // Products to render
   useEffect(()=>{
        let productsCollected : [] = [];
        fetchedUsers.forEach((v, i)=>{
            productsCollected.push(v);
        });
        addToRender(productsCollected);
   }, [fetchedUsers]);
   
   // Add to the products to be rendered
    const addToProducts = (start : number)=>{
        try {
            loadingStatus(loadMoreUsers[1]);
            setTimeout(()=>{
                fetch(`https://reqres.in/api/users?page=${start+1}`)
                .then(
                    res => res.json()
                ).then(
                    results => {
                        if(results.data.length > 0){
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
            (fetchedUsers.length !== usersToRender.length) ? console.log('É don complete') : addToProducts(pageToFetch);
        }
   }
   
   // Render preloader upon page load (no products) or fetched Product list when available
   //{loadingMoreUsers === 'loading' ? <Loader/> : <span></span>}
    return (
        <div className="users" onScroll={handleScroll}>
            <div className={`row${(status) ? ' active' : ''}`}>
                {
                    (fetchedUsers.length === 0) ? <Preloader/> :
                    usersToRender.map((v : IProduct, i : number) => <User key={v.id} id={v.id} email={v.email} first_name={v.first_name} last_name={v.last_name} avatar={v.avatar}/> )
                }
            </div>
            <Loader/> 
        </div>
    );
}

export default Users;