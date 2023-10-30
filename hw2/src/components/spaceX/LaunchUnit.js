import React from 'react';
import css from './SpaceX.module.css'
const LaunchUnit = ({info}) => {
    const {mission_name,launch_year,links:{mission_patch_small}} = info
    return (
        (launch_year!=='2020')?<div className={css.LaunchUnit}>
            <p>Mission: {mission_name}</p>
            <p>Year: {launch_year}</p>
            <img src={mission_patch_small} alt=""/>
        </div>:''
    );
};

export {LaunchUnit};