const User = require("../models/user");
const JwtService = require("./jwtService");
const bcrypt = require("bcrypt");

class UserService {
  static async registerUser(userData, ip) {
    try {
      const userExists = await User.findOne({ email: userData.email });
      if (userExists) {
        return { success: false, message: "Email is already registered" };
      }

      const hashedPassword = await bcrypt.hash(userData.password, 10);

      const newUser = new User({
        username: userData.username,
        email: userData.email,
        hashedPassword: hashedPassword,
        roles: ["user"],
        ip: ip,
      });

      await newUser.save();

      const token = JwtService.generateToken(newUser);

      return { success: true, message: "User registered successfully", token };
    } catch (error) {
      console.error("Error registering user:", error);
      return { success: false, message: "Registration failed" };
    }
  }

  static async loginUser(userData) {
    try {
      const user = await User.findOne({ email: userData.email });

      if (!user) {
        return { success: false, message: "Invalid credentials" };
      }

      const isPasswordValid = await bcrypt.compare(
        userData.password,
        user.hashedPassword
      );

      if (!isPasswordValid) {
        return { success: false, message: "Invalid credentials" };
      }

      const token = JwtService.generateToken(user);

      return { success: true, message: "User logged in successfully", token };
    } catch (error) {
      console.error("Error logging in user:", error);
      return { success: false, message: "Login failed" };
    }
  }
}

module.exports = UserService;
