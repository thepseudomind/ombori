import React from 'react';
import './User.scss';
import { IProduct } from '../../types/types';

const User =({id, email, first_name, last_name, avatar} : IProduct)=>{
    return (
        <div className="user">
            <div className="user__header">
                <img src={avatar} alt={`${first_name}-${id}`} className="user__header--avatar"/>
            </div>
            <div className="user__content">
                <p className="user__name">{`${first_name} ${last_name}`}</p>
                <p className="user__email">{email}</p>
            </div>
        </div>
    );
}

export default User;