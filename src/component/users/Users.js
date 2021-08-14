import User from 'component/users/Users';
import {useEffect, useState} from "react";

export default function Users() {

    let [users, setUsers ]= useState([]);

    useEffect(() => {
        fetch ('https://jsonplaceholder.typicode.com/users')
            .then (value => value.json())
            .then(response => {
                setUsers(response);
            });
    },[])


    return (
        <div>
            users.map((userItem, index) => <User kay={userItem.id} item={userItem}/>)
        </div>
    )
}