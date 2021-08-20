import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/User.fetch.service";

const PostsOfUser = ({id}) => {
 const [postsUser,setPostsUser] = useState([])
  useEffect(() => {
    getPostsOfUser(id).then(value => setPostsUser(value))
  }, [id])
  return (
      <ul>
          {postsUser.map(value => <li>{value.id} {value.title}</li>)}
      </ul>
  )
}
export default PostsOfUser