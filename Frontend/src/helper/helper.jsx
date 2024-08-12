import CreateBlog from "../pages/createBlog.jsx";
import BlogDetail from "../pages/blogDetail.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Error404 from "../pages/Error404.jsx";
import Blogs from "../pages/Blogs.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";

const routesName = [
  { path: "/", element: <Blogs /> },
  { path: "/createblog", element: <CreateBlog /> },
  { path: "/createblog/:id", element: <CreateBlog /> },
  { path: "/blogs/:id", element: <BlogDetail /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "*", element: <Error404 /> },
];

const Navigation = [
  { to: "/", element: "Blogs" },
  { to: "/createblog", element: "Create Blog" },
  { to: "/about", element: "About" },
  { to: "/contact", element: "Contact" },
];

export { routesName, Navigation };
