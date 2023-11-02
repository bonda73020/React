import React from 'react';
import {useForm} from "react-hook-form";

import {userService} from "./axios/userService";
import css from './task1.module.css'

const UserForm = ({setUsers}) => {


    const {reset,handleSubmit,register} = useForm()

    const save = async (user)=>{
        const {data} = await userService.newUser(user)
        setUsers(prev=>[...prev,data])
        reset()
    }

    const formElements=['email','name','username']

    return (
        <form onSubmit={handleSubmit(save)}>

            {formElements.map((i,index)=><input type="text" key={index} placeholder={i} {...register(i)}/>)}
        <button>Save</button>
        </form>
    );
};

export {UserForm};