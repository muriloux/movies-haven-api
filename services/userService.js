const User = require("../models/user");
const JwtService = require("./jwtService");

class UserService {
  static async registerUser(username, email, ip) {
    try {
      const userExists = await User.findOne({ email });
      if (userExists) {
        return { success: false, message: "Email is already registered" };
      }

      const newUser = new User({
        username,
        email,
        ip,
      });

      await newUser.save();

      const token = JwtService.generateToken(newUser);

      return { success: true, message: "User registered successfully", token };
    } catch (error) {
      console.error("Error registering user:", error);
      return { success: false, message: "Registration failed" };
    }
  }
}

module.exports = UserService;
