import React from 'react';
import style from './Preloader.module.css'

const Preloader = () => {
    return <div className={style.loader}>
        <span>Loading...</span>
    </div>
};

export default Preloader;