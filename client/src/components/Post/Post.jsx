import './Post.css'
import { Link } from "react-router-dom";

export default function Post({ post } ) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="Post">
        {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
        <div className="postInfo">
            <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
            <hr/>
            <h1>
              {post.price}€
            </h1>
            <p className='postDesc'>
            {post.desc}
            </p>
        </div>
    </div>
  )
}
