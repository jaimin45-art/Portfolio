import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { v4 as uuid } from "uuid";
import styles from "./PostsStyle.module.css" 
function Posts() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Load from localStorage
  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  // Save to localStorage when blogs change
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const handleAddBlog = () => {
    if (!isAuthenticated) {
      loginWithRedirect();
      return;
    }

    if(!title || !body) return;

    const newBlog = {
      id: uuid(),
      title,
      body,
      userId: user?.sub,
      userName: user?.name,
    };

    setBlogs([newBlog, ...blogs]);
    setTitle("");
    setBody("");
  };

  const handleDelete = (id) => {
    const blogToDelete = blogs.find((b) => b.id === id);
    if (blogToDelete.userId !== user?.sub) {
      alert("Unauthorized!");
      return;
    }

    const updatedBlogs = blogs.filter((b) => b.id !== id);
    setBlogs(updatedBlogs);
  };

  return (
    <div className={styles.container}>
      <header>
        <h2>📝 Blog App</h2>
      
      </header>

      <div className={styles.form}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Blog Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button className={styles.btn} onClick={handleAddBlog}>Add Post</button>
      </div>

      <div className={styles.list}>
        {blogs.map((blog) => (
          <div key={blog.id} className={styles.card}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
            <small>By: {blog.userName || "Anonymous"}</small>

            {isAuthenticated && blog.userId === user?.sub && (
              <div className={styles.actions}>
                {/* You can add edit logic here too */}
                <button onClick={() => handleDelete(blog.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
