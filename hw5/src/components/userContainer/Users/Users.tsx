import React, {useEffect, useState} from 'react';

import {IUser} from "../../../interfaces/userInterface";
import {userService} from "../../../services/userService";
import {User} from "../User/User";
import {UserDetails} from "../userDetails/UserDetails";

const Users = () => {
    const [users,setUsers] = useState<IUser[]>([])
    const [userDetails,setUserDetails] = useState<IUser>(null)

    const click = async (userId:number):Promise<void>=>{
        const {data} = await userService.getById(userId)
        setUserDetails(data)
    }

    useEffect(() => {
        userService.getAll().then(({data})=>setUsers(data))
    }, []);

    return (
        <div>
            {userDetails&&<UserDetails userDetails={userDetails}/>}
            {users.map(i=><User key={i.id} user={i} click={click}/>)}
        </div>
    );
};

export {Users};