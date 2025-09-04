import Post from '../Post/Post'
import './Posts.css'

//Show Full Products

export default function Posts({ posts }) {
  return (
    <div className='posts'>
        {posts.map((p) => (
        <Post key={p._id} post={p}/>
      ))}
    </div>
  )
}
