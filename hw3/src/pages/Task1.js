import React, {useEffect, useState} from 'react';
import {Users} from "../components/Task1/Users";
import {UserForm} from "../components/Task1/UserForm";

import {userService} from "../components/Task1/axios/userService";

const Task1 = () => {

    const [users,setUsers] = useState([])
    useEffect(() => {
        userService.getAll().then(({data})=>setUsers(data))
    }, []);


    return (
        <>
            <h1>Task1</h1>
            <UserForm setUsers={setUsers}/>
            <Users users={users}/>
        </>
    );
};

export {Task1};