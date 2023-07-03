import "./App.css";
import BlogDetails from "./BlogDetails";
import Create from "./Create";
import Home from "./Home";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
