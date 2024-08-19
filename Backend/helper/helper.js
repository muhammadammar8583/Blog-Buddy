import jwt from "jsonwebtoken";
import "dotenv/config";

const generateToken = (data) => {
  return jwt.sign(data, process.env.SECRET_KEY);
};

const verifyToken = (token, callbk) => {
  return jwt.verify(token, process.env.SECRET_KEY, callbk);
};

export { generateToken, verifyToken };
