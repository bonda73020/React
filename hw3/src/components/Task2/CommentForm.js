import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../Task1/axios/userService";
import {commentsService} from "./axios/commentsService";

const CommentForm = ({setComments}) => {

    const {reset,register,handleSubmit} = useForm()

    const save = async (comment)=>{
        const {data} = await commentsService.newComment(comment)
        setComments(prev=>[...prev,data])
        reset()
    }
    const formElements=['email','name','body']


    return (
        <form onSubmit={handleSubmit(save)}>
            {formElements.map((i,index)=><input type="text" key={index} placeholder={i} {...register(i)}/>)}
            <button>Save</button>
        </form>
    );
};

export {CommentForm};