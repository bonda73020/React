import React, {useState} from 'react';

import css from './App.module.css'
import {Task1} from "./pages/Task1";
import {Task2} from "./pages/Task2";

const App = () => {

    const [task,setTask] = useState(0)

    return (
        <div id={css.wraper}>
            <div id={css.MainButtons}>
                <div className={css.TaskButton} onClick={()=>setTask(0)}>Task 1</div>
                <div className={css.TaskButton} onClick={()=>setTask(1)}>Task 2</div>
            </div>
            {task === 0?<Task1/>:<Task2/>}
        </div>
    );
};

export {App};