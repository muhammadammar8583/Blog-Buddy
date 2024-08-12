import { Users } from "../models/users.models.js";

const handleCreateUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.create({
      email,
      password,
    });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

const handleLoginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email, password });
  if (!user) return res.json({ message: "Invalid email or password" });
  res.json({ message: "User logged in!" });
  console.log(user);
};

export { handleCreateUser, handleLoginUser };
