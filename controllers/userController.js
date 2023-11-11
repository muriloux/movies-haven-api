const UserService = require("../services/userService");
const requestIp = require("request-ip");

class UserController {
  static async registerUser(req, res) {
    try {
      const { username, email } = req.body;
      const ip = requestIp.getClientIp(req);
      const registrationResponse = await UserService.registerUser(
        username,
        email,
        ip
      );

      if (registrationResponse.success) {
        res.status(201).json({
          message: registrationResponse.message,
          token: registrationResponse.token,
        });
      } else {
        res.status(400).json({ error: registrationResponse.message });
      }
    } catch (error) {
      console.error("Error during registration:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = UserController;
