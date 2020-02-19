import React, {useState, useEffect} from 'react';
import './Users.scss';
import User from '../User/User';
import Preloader from '../Preloader/Preloader';
import { IMain, IProduct } from '../../types/types';

const Users = ({status} : IMain)=>{
    const [fetchedUsers, setUsers] = useState([]);
    const [usersToRender, addToRender] = useState([]);
    const [loadingMoreUsers, loadingStatus] = useState(false);
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
                        loadingStatus(false);
                    }
                }
            );
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
   //{loadingMoreUsers ? <div className="users__spinner"></div> : <span></span>}
    return (
        <div className="users" onScroll={handleScroll}>
            <div className={`row${(status) ? ' active' : ''}`}>
                {
                    (fetchedUsers.length === 0) ? <Preloader/> :
                    usersToRender.map((v : IProduct, i : number) => <User key={v.id} id={v.id} email={v.email} first_name={v.first_name} last_name={v.last_name} avatar={v.avatar}/> )
                }
            </div>
        </div>
    );
}

export default Users;