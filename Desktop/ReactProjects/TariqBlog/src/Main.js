import Services from "./Services.js";

import "./index.css";

const Main = () => {
  return (
    <>
      <div className="Hero">
        {/* <h2>Sorry</h2>
        <p>That Page cannot Found</p>
        <Link to='/'>Back To Home Page</Link> */}
        <div className="Text-part">
          <h1>The Moderen Way to write your Blog </h1>
          <p>
            Ignite your curiosity, explore diverse topics, and engage with our
            blog website. Expand your knowledge today!
          </p>
          <button>Dicover</button>
        </div>
        <div className="img-part">
          <img src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg" />
        </div>
      </div>
      <Services />
    </>
  );
};

export default Main;
