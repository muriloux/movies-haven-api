const User = require("../models/user"); // Adjust the path based on your project structure
const { userJoiSchema } = require("../models/user");

class UserService {
  static async registerUser(username, email, password) {
    try {
      const { error } = userJoiSchema.validate({
        username,
        email,
      });

      if (error) {
        throw new Error(error.details[0].message);
      }

      const newUser = new User({
        username,
        email,
      });

      await newUser.save();
      return { success: true, message: "User registered successfully" };
    } catch (error) {
      console.error("Error registering user:", error.message);
      return { success: false, message: "Registration failed" };
    }
  }
}

module.exports = UserService;
