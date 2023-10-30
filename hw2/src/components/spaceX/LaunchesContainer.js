import React, {useEffect, useState} from 'react';


import {axiosSpace} from "./axiosSpace";
import {LaunchUnit} from "./LaunchUnit";
import css from './SpaceX.module.css'
const LaunchesContainer = () => {

    const [launches,setLaunches] = useState([])

    useEffect(() => {

        axiosSpace.getAll().then(({data})=>setLaunches(data))

    }, []);

    return (
        <div id={css.Task2}>
            <h1>Task 2</h1>
        <div id={css.LaunchesContainer}>
            {launches.map((i,index)=><LaunchUnit key={index} info={i}/>)}
        </div>
        </div>
    );
};

export {LaunchesContainer};