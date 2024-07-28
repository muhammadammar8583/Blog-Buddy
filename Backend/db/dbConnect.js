import mongoose from "mongoose";
import "dotenv/config";

const dbConnect = mongoose
  .connect(process.env.DB_URL || "mongodb://127.0.0.1/Blogs", {
    dbName: "Blogs",
  })
  .then(() => {
    console.log("App successfully connected to database!");
  })
  .catch((error) => {
    console.log(error);
  });

export { dbConnect };
