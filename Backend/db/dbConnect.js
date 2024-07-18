import mongoose from "mongoose";
import "dotenv/config";

const dbConnect = mongoose
  .connect(process.env.DB_URL, { dbName: "Blogs" })
  .then(() => {
    console.log("App successfully connected to database!");
  })
  .catch((error) => {
    console.log(error);
  });

export { dbConnect };
