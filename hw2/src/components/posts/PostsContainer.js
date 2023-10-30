import React, {useEffect, useState} from 'react';

import css from './posts.module.css'
import {postServise} from "../axios/postServise";
import {PostUnit} from "./PostUnit";

const PostsContainer = () => {


    const [posts,setPosts] = useState([])
    const [selected,setSelected] = useState(-1)

    const buttonPressed=(i)=>{
        if (i !== selected){
            setSelected(i)
        }
        else{
            setSelected(-1)
        }
    }


    useEffect(() => {
        postServise.getAll().then(({data})=>{setPosts(data)})
    }, []);

    return (
        <div id={css.Task1}>
            <h1>Task 1</h1>
            <div id={css.PostsContainer}>
            {posts.map(i=><PostUnit key={i.id} data={i} pressed={buttonPressed} selected={selected}/>)}
            </div>
            </div>
    );
};

export {PostsContainer};