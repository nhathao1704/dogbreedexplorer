import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.models.js";

// REGISTER
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "Nhập đủ thông tin" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email đã đăng ký" });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username đã tồn tại" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Đăng ký thành công" });

  } catch (error) {
    res.status(500).json({ message: "Lỗi đăng ký", error });
  }
};

// LOGIN
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Nhập đủ thông tin" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Tài khoản chưa đăng ký" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Mật khẩu không đúng" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      token,
      userId: user._id,
      email: user.email,
      username: user.username,
    });

  } catch (error) {
        console.error("🔥 LOGIN ERROR:", error.message);
        res.status(500).json({ message: "Login lỗi" });
    }
};

export { registerUser, loginUser };