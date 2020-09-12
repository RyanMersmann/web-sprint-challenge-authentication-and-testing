/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET || "Logic is the beginning of wisdom, not the end.";

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        // something wrong with the token
        res.status(401).json({ error: "can't touch this!" });
      } else {
        // token is good we can see the data inside the decodedToken
        req.jwt = decodedToken;

        next();
      }
    });
  } else {
    res.status(401).json({ error: "you shall not pass!" });
  }
};
