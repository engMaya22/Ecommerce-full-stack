
import express from "express"
import { getProductsByCategory } from "../controllers/product/controller.js";


const productRouter = express.Router();

productRouter.get('/' , getProductsByCategory);

export default productRouter;