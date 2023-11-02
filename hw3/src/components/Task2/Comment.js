import React from 'react';
import css from "./task2.module.css"


const Comment = ({comment}) => {
    const {id,body,name} = comment

    return (
        <div className={css.comment}>
            <p id={css.abz}>id:{id}</p>
            <p id={css.abz}>title:{name}</p>
            <p>body:{body}</p>
        </div>
    );
};

export {Comment};