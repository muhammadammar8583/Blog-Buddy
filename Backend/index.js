import express from "express";
import "dotenv/config";
import { dbConnect } from "./db/dbConnect.js";
import cors from "cors";

const app = express();

app.listen(process.env.PORT, () => {
  console.log("App listening on Port:", process.env.PORT);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

//Midllewares
app.use(cors);
app.use(express.json());

//Database connect
dbConnect;

//Routes
import blogRoutes from "./routes/blogs.routes.js";

app.use("/blogs", blogRoutes);
