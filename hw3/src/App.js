import React, {useState} from 'react';

import css from './App.module.css'
import {Task1} from "./pages/Task1";
import {Task2} from "./pages/Task2";
import {Task3} from "./pages/Task3";

const App = () => {

    const [selected,setSelected] = useState(1)


    return (
        <div id={css.wrapper}>

          <div id={css.buttonContainer}>
            <div className={css.button} id={selected===0?css.selected:""} onClick={()=>setSelected(0)}>Task 1</div>
            <div className={css.button} id={selected===1?css.selected:""} onClick={()=>setSelected(1)}>Task 2</div>
            <div className={css.button} id={selected===2?css.selected:""} onClick={()=>setSelected(2)}>Task 3</div>
          </div>

            {selected===0&&<Task1/>}
            {selected===1&&<Task2/>}
            {selected===2&&<Task3/>}


        </div>
    );
};

export {App};