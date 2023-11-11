const jwt = require('jsonwebtoken');

class JwtService {
  static generateToken(user) {
    const payload = {
      userId: user._id,
      email: user.email,
    };

    const options = {
      expiresIn: '1h',
    };

    return jwt.sign(payload, process.env.SECRET_KEY, options);
  }

  static verifyToken(token) {
    return jwt.verify(token, process.env.SECRET_KEY);
  }
}

module.exports = JwtService;
