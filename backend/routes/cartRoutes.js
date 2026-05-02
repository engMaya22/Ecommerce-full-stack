import express from "express";
import { getCart, addToCart, removeFromCart } from "../controllers/cartController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const cartRouter = express.Router();

cartRouter.get('/', authMiddleware, getCart);
cartRouter.post('/update', authMiddleware, addToCart);
cartRouter.delete('/:productId', authMiddleware, removeFromCart);


export default cartRouter;