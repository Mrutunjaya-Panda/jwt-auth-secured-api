// Please don't change the pre-written code
// Import the necessary modules here
import jwt from "jsonwebtoken";

// iv) Implement the "jwtAuth" middleware to fetch and verify the "jwtToken" cookie.
// v) Grant access to the "/api/product" route if the token is valid.
// vi) Send a response with status 401 and JSON object { success: false, msg: error } if the token is invalid or missing.
//Note:
//Ensure to handle edge cases such as expired or tampered tokens in the "jwtAuth" middleware.
const jwtAuth = (req, res, next) => {
  // Write your code here
  const token = req.cookies.jwtToken;
  if (!token) {
    return res.status(401).json({ success: false, msg: "Token missing" });
  }
    try {
      const payload = jwt.verify(token, "CodingNinjas2016");
      req.userId = payload.userId;
      next();
    } catch (error) {
      return res.status(401).json({ success: false, msg: "Invalid token" });
    }
};

export default jwtAuth;
