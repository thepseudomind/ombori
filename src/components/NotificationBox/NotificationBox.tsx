import React from 'react';
import './NotificationBox.scss';
import { TMessage } from '../../types/types';

const NotificationBox = ({message} : TMessage)=>{
    return (
        <div className="notification">
            <p className="notification__message">{message}</p>
        </div>
    );
}

export default NotificationBox;