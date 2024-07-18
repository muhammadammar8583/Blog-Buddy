import Home from "../pages/Home.jsx";
import CreateBlog from "../pages/createBlog.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Error404 from "../pages/Error404.jsx";
import Blogs from "../pages/Blogs.jsx";

const routesName = [
  { path: "/", element: <Home /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/createblog", element: <CreateBlog /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <Error404 /> },
];

const Navigation = [
  { to: "/", element: "Home" },
  { to: "/blogs", element: "Blogs" },
  { to: "/createblog", element: "Create Blog" },
  { to: "/about", element: "About" },
  { to: "/contact", element: "Contact" },
];

export { routesName, Navigation };
