import express from "express";
import productRoutes from "./src/features/product/routes/product.routes.js";
import userRoutes from "./src/features/user/routes/user.routes.js";
import cookieParser from "cookie-parser";
//import jwtAuth from "./src/middlewares/jwtAuth.js";
const app = express();

app.use(express.json());
app.use(cookieParser());

// iv) Implement the "jwtAuth" middleware to fetch and verify the "jwtToken" cookie.
// v) Grant access to the "/api/product" route if the token is valid.
// vi) Send a response with status 401 and JSON object { success: false, msg: error } if the token is invalid or missing.
app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes);

export default app;
