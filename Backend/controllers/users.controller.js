import { Users } from "../models/users.models.js";
import { generateToken, verifyToken } from "../helper/helper.js";
import "dotenv/config";

const handleCreateUser = async (req, res, next) => {
  const { email, password, name } = req.body;
  try {
    const user = await Users({
      email,
      password,
      name,
    });

    await user.save();
    const token = generateToken({ email });
    res.status(201).json({ message: "User created successfully", user, token });
    next();
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

const handleCheckUser = async (req, res) => {
  const { token } = req.body;
  console.log(token);
  verifyToken(token, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ message: "Invalid Token!" });
    } else {
      console.log(data);
    }
  });
};

const handleLoginUser = async (req, res) => {
  const { email, password, token } = req.body;
  console.log(token);
  const user = await Users.findOne({ email, password });
  if (!user) return res.json({ message: "Invalid email or password" });
  res.json({ message: "Token Verified and User logged in!", token });
};

export { handleCreateUser, handleLoginUser, handleCheckUser };
