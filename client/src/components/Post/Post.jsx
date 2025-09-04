import './Post.css'
import { Link } from "react-router-dom";

//Single Product Function

export default function Post({ post } ) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="Post">
      <div className="postImgWrap">
        {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
        </div>
        <div className="postInfo">
            <Link to={`/post/${post._id}`} className="postTitleLink">
          <span className="postTitle">{post.title}</span>
        </Link>
            <hr/>
            <h1 className="postPrice">
              {Number(post.price).toFixed(2)}€
            </h1>
            <p className='postDesc'>
            {post.desc}
            </p>
        </div>
    </div>
  )
}
