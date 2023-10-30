import React from 'react';
import css from './posts.module.css'
const PostUnit = ({data,pressed,selected}) => {
    const {userId,id,title,body} = data
    return (
        <div className={css.PostUnit}>
            <h2>{title}</h2>
            {selected===id?(
               <div className={css.postBody}>
                   <p>User: {userId}</p>
                   <p>{body}</p>
               </div>
            ):('')}

            <h3>ID:{id}</h3>
            <div className={css.postButton} onClick={()=>pressed(id)}>Show post</div>
        </div>
    );
};

export {PostUnit};