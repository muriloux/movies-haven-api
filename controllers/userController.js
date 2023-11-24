const UserService = require("../services/userService");
const requestIp = require("request-ip");

class UserController {
  static async registerUser(req, res) {
    try {
      const userData = req.body;
      const ip = requestIp.getClientIp(req);
      const registrationResponse = await UserService.registerUser(userData, ip);

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

  static async loginUser(req, res) {
    try {
      const userData = req.body;
      const loginResponse = await UserService.loginUser(userData);

      if (loginResponse.success) {
        res.status(200).json({
          message: loginResponse.message,
          token: loginResponse.token,
        });
      } else {
        res.status(400).json({ error: loginResponse.message });
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = UserController;
