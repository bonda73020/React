import React from 'react';
import {User} from "./User";

const Users = ({users}) => {
    return (
        <div>
            {users.map(i=><User key={i.id} info={i}/>)}
        </div>
    );
};

export {Users};