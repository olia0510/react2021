import 'Users.css'
import {useEffect, useState} from "react";
import {getUsers} from "../../services/User.fetch.service";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(()=>{

        getUsers().then(value => setUsers([...value]))
    },[]);

    return (
        <div className={wrape}>
           <div className={'user-box'}>
               {
                   users.map(value => <User key={value.id}/>)
               }
           </div>


            <div className={'chosen-one'}></div>
        </div>
    )
}