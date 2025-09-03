import './SinglePost.css'
import Button from "react-bootstrap/Button"
import { useLocation } from "react-router";
import {useEffect, useState , useContext} from "react";
import axios from "axios";
import { Context } from "../../context/context";


export default function SinglePost() {
  const url ="http://localhost:5000/server/posts"
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      try {
      const res = await axios.get(url + "/" + path);
      setPost(res.data);
      setTitle(res.data.title ?? "");
      setDesc(res.data.desc ?? "");
      setPrice(res.data.price ?? "")
    } catch (e) {
        console.error(e);
       }
      };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    if (!user?.username) return alert("Please Log in!");
    try {
      await axios.delete(`http://localhost:5000/server/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.error(err);
      alert("Something went wrong!")
    }
  };

  const handleUpdate = async () => {
    if (!user?.username) return alert("You have to be logged in!");
    try {
      await axios.put(`http://localhost:5000/server/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
        price: Number(price),
      });
      setPost((p) => ({
        ...p,
        title,
        desc,
        price: Number(price), 
      }));
      setUpdateMode(false);
    } catch (err) {
      console.error(err); 
      alert("Something went wrong!")
    }
  };

  

return (
      <div className="singlePost">
        <div className="singlePostWrapper twoCols">
          <div className="singlePostLeft">
          {post.photo && (
            <img src={PF + post.photo} alt="" className="singlePostImg" />
          )}
          </div>
          <div className="singlePostRight">
          {updateMode ? (
            <input
              type="text"
              value={title}
              className="singlePostTitleInput"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h1 className="singlePostTitle">
              {title}
              
            </h1>
          )}
          <div>
          {updateMode ? (
            <input
              className="singlePostDescInput"
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price (€)"
            />
          ) : (
            <p className="singlePostPrice">{post.price}€</p>
          )}
          </div>
          {updateMode ? (
            <textarea
              className="singlePostDescInput"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={4}
              placeholder="Description"
            />
          ) : (
            <p className="singlePostDesc">{desc}</p>
          )}
          {!updateMode && post.username === user?.username && (
                <div className="singlePostEdit">
                  <Button
                    className="singlePostIcon far fa-edit"
                    onClick={() => setUpdateMode(true)} variant="success"
                  >Update</Button>
                  <Button
                    className="singlePostIcon far fa-trash-alt"
                    onClick={handleDelete} 
                    variant='danger'
                  >Delete</Button>
                </div>
           )}
          {updateMode && (
            <div className="singlePostActionsRow">
            <Button className="singlePostButton save" variant="success" onClick={handleUpdate}>
              Save
            </Button>
            <Button
              className="singlePostButton cancel"
              variant="danger"
              onClick={() => {
                setTitle(post.title ?? "");
                setDesc(post.desc ?? "");
                setPrice(post.price ?? "");
                setUpdateMode(false);
              }}
            >
              Cancel
            </Button>
          </div>
          )}
          </div>
        </div>
      </div>

    );
}