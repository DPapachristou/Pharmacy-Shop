import './SinglePost.css'
import Button from "react-bootstrap/Button"
import { useLocation } from "react-router";
import {useEffect, useState , useContext} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
      const res = await axios.get(url + "/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setPrice(res.data.price)
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/server/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/server/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
        price,
      });
      setUpdateMode(false)
    } catch (err) {}
  };

  

return (
      <div className="singlePost">
        <div className="singlePostWrapper">
          {post.photo && (
            <img src={PF + post.photo} alt="" className="singlePostImg" />
          )}
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
              {post.username === user?.username && (
                <div className="singlePostEdit">
                  <Button
                    className="singlePostIcon far fa-edit"
                    onClick={() => setUpdateMode(true)} variant="success"
                  >Update</Button>
                  <Button
                    className="singlePostIcon far fa-trash-alt"
                    onClick={handleDelete} variant='danger'
                  >Delete</Button>
                </div>
              )}
            </h1>
          )}
          <div>
          {updateMode ? (
            <textarea
              className="singlePostDescInput"
              value={post.price}
              onChange={(e) => setPrice(e.target.value)}
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
            />
          ) : (
            <p className="singlePostDesc">{desc}</p>
          )}
          {updateMode && (
            <button className="singlePostButton" onClick={handleUpdate}>
              Update
            </button>
          )}
        </div>
      </div>

    );
}

/* 
import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class GroupedButtons extends React.Component {
  state = { counter: 0 };

  handleIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  handleDecrement = () => {
    this.setState(state => ({ counter: state.counter - 1 }));
  };
  render() {
    const displayCounter = this.state.counter > 0;

    return (
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={this.handleIncrement}>+</Button>
        {displayCounter && <Button disabled>{this.state.counter}</Button>}
        {displayCounter && <Button onClick={this.handleDecrement}>-</Button>}
      </ButtonGroup>
    );
  }
}

export default GroupedButtons;
*/