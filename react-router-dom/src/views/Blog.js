// import './Blog.css';
import { useParams } from "react-router-dom";

function Blog() {
  const {id} = useParams();
  return (
    <>
      <h2>Blog Content</h2>
      <div>
        {id && (
          <>
            <h3>Publication {id}</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque ipsa tempore ipsam unde, obcaecati quisquam quam
              consequatur iste nesciunt cum?
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default Blog;
