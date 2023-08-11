import './NewArticle.css'
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../context/context";


export default function NewArticle() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
          username: user.username,
          title,
          desc,
          price,
        };
        if (file) {
          const data =new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          newPost.photo = filename;
          try {
            await axios.post("http://localhost:5000/server/upload", data);
          } catch (err) {}
        }
        try {
          const res = await axios.post("http://localhost:5000/server/posts", newPost);
          window.location.replace("/post/" + res.data._id);
        } catch (err) {}
      };

  return (
      <div className="write">
        {file && (
          <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
        )}
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <input
              type="file"
              id="fileInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="Product Title"
              className="writeInput"
              autoFocus={true}
              onChange={e=>setTitle(e.target.value)}
            />
          </div>
          <input
              type="text"
              placeholder="Price"
              className="writeInput"
              onChange={e=>setPrice(e.target.value)}
            />
          <div className="writeFormGroup">
            <textarea
              placeholder="Product Description..."
              type="text"
              className="writeInput writeText"
              onChange={e=>setDesc(e.target.value)}
            ></textarea>
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    );
  }
