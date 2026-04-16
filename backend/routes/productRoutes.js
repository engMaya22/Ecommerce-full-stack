
import express from "express"
import { getProductsByCategory } from "../controllers/productController.js";


const productRouter = express.Router();

productRouter.get('/' , getProductsByCategory);

export default productRouter;