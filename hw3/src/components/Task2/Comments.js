import React from 'react';
import {Comment} from "./Comment";

const Comments = ({comments}) => {
    return (
        <div>
            {comments.map(i=><Comment key={i.id} comment={i}/>)}
        </div>
    );
};

export {Comments};