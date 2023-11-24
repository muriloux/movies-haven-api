const isAdminMiddleware = (req, res, next) => {
  const user = req.user;

  if (!user) {
    return res
      .status(401)
      .json({ error: "Unauthorized: User not authenticated" });
  }

  if (user.roles && user.roles.includes("admin")) {
    next();
  } else {
    return res.status(403).json({ error: "Forbidden: Admin access required" });
  }
};

module.exports = isAdminMiddleware;
