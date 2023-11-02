import React, {useEffect, useState} from 'react';
import {commentsService} from "../components/Task2/axios/commentsService";
import {Comments} from "../components/Task2/Comments";
import {CommentForm} from "../components/Task2/CommentForm";

const Task2 = () => {
    const [comments,setComments] = useState([])

    useEffect(() => {
        commentsService.getAll().then(({data})=>setComments(data))
    }, []);

    return (
        <>
            <h1>Task 2</h1>
            <CommentForm setComments={setComments}/>
            <Comments  comments={comments}/>

        </>
    );
};

export {Task2};