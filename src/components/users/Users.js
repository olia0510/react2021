import './Users.css'
import {useEffect, useState} from "react";
import {getPostsOfUser, getUsers} from "../../services/User.fetch.service";
import User from '../user/User'
import PostsOfUser from "../postsOfUser/PostsOfUser";

export default function Users() {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    useEffect(()=>{

        getUsers().then(value => setUsers([...value]))
    },[]);

    const choseUser = (u) => {
        setUser({...u});

        getPostsOfUser(u.id).then(value => console.log(value));
    }

    return (
        <div className={'wrap'}>
           <div className={'user-box'}>
               {
                   users.map(value =>
                       <User
                          key={value.id}
                          item={value}
                          choseUser={choseUser}
                       />
                   )
               }
           </div>


            {user && <div className={'chosen-one'}>
                <h4>{user.id}.{user.name}</h4>
                <PostsOfUser id={user.id}/>
            </div>}
        </div>
    )
}