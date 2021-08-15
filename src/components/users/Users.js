import './Users.css'
import {useEffect, useState} from "react";
import {getPostsOfUser, getUsers} from "../../services/User.fetch.service";
import User from '../user/User'

export default function Users() {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);
    // let [posts, setPosts] = useState(null);

    useEffect(()=>{

        getUsers().then(value => setUsers([...value]))
    },[]);
    //
    // const posts = (p) => {
    //     setPosts({...p});
    //
    // }
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
                          posts={posts}
                       />
                   )
               }
           </div>


            <div className={'chosen-one'}>{JSON.stringify(user)}</div>
        </div>
    )
}