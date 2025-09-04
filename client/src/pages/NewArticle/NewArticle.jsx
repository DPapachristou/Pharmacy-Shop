import './NewArticle.css'
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../context/context";
import Footer from "../../components/Footer/Footer";

// Page for creating a new product
export default function NewArticle() {
    // Form states
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);
    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        // New product object
        const newPost = {
          username: user.username,
          title,
          desc,
          price,
        };
        // If image file is selected, upload it first
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
        // Then send product data to backend
        try {
          const res = await axios.post("http://localhost:5000/server/posts", newPost);
          // Redirect to product page
          window.location.replace("/post/" + res.data._id);
        } catch (err) {}
      };

  return (
    <div className='productPage'>
      <div className="write">
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <input
              type='file'
              className='fileInput'
              id='fileUpload'
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="fileUpload" className="customFileLabel">
              Upload Product
            </label>
            {file && (
            <div className="imagePreview">
             <img className="writeImg" src={URL.createObjectURL(file)} alt="preview" />
            <button 
              type="button" 
              className="removeImgBtn"
              onClick={() => setFile(null)}
            >
             Remove Image
            </button>
            </div>
             )}
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
      <Footer/>
    </div>
    );
  }