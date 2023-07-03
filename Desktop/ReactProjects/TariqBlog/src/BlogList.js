import { Link } from "react-router-dom";
import "./index.css";

function BlogList({ blogs, title }) {
  return (
    <div className="blog-list">
      <div className="bloglist-header">
        <h2>{title}</h2>
        <Link to="/Create">New Blog</Link>
      </div>

      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
