import Header from "../../components/Header/Header"
import Posts from "../../components/Posts/Posts"
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./Home.css"


// Home Page (lists all products/posts)
export default function HomePage() {
  const url = "http://localhost:5000/server/posts"
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  
  // Fetch posts whenever search query changes
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(url + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
    <Header/>
    <div className="home">
        <Posts posts={posts}/>
    </div>
    <Footer/>
    </>
  )
}
