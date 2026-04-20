import express from "express";
import { getCart, addToCart } from "../controllers/cartController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const cartRouter = express.Router();

cartRouter.get('/', authMiddleware, getCart);
cartRouter.post('/update', authMiddleware, addToCart);



export default cartRouter;