const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ message: "Auth failed", sucess: false });
      } else {
        req.body.userId = decode.user.id;
        next();
      }
    });
  } catch (e) {
    return res.status(401).send({ message: "Auth failed", sucess: false });
  }
};
