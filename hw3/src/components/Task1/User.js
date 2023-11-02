import React from 'react';


import css from './task1.module.css'

const User = ({info}) => {


    const {email,id,name,username} = info

    return (
        <div className={css.User}>
            <p id={css.abz}>id:{id}</p>
            <p id={css.abz}>name:{name}</p>
            <p id={css.abz}>@{username}</p>
            <p>email:{email}</p>
        </div>
    );
};

export {User};