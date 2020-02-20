import React from 'react';
import './Loader.scss';
import { TLoader } from '../../types/types';

const Loader = ({mini}: TLoader)=>{
    return <div className={`loader${mini ? '__mini' : ''}`}></div>;
};

export default Loader;